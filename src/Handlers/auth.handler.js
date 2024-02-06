const {register,addUserOffice, addStudentIdentity, selectUser, selectOffice} = require("../Models/auth.model");
const argon = require("argon2");
const jwt = require("jsonwebtoken");
const { jwtKey, issuerWho } = require("../Configs/environtment");
const db = require("../Configs/postgre");

const registerUser = async (req, res) => {
  const client = await db.connect();
    try {
      await client.query("begin");
        const { body } = req;
        const hashedPassword = await argon.hash(body.password);
        const registerUser = await register(body, hashedPassword);
        // if (body.user_type !== "Student") {
        //   const insertOffice = await addUserOffice(body.office, registerUser.rows[0].id)
        // }
        const result = body.user_type !== "Student" ? await addUserOffice(body.office, registerUser.rows[0].id) : await addStudentIdentity(body, registerUser.rows[0].id)
        const createdUser = registerUser.rows[0];
        await client.query("commit");
        res.status(201).json({
            msg: `Data successfully saved`,
        });
    } catch (error) {
        console.error(error);
        await client.query("rollback");
        if (error.code === "23505") {
          if (error.constraint === "pengguna_email_key") {
            return res.status(400).json({
              msg: `Email sudah digunakan`
            });
          };   
        }
        res.status(500).json({
            msg: "Internal server error",
        });
    }
};

const loginUser = async (req, res) => {
    try {
      const { body } = req;
      const result = await selectUser(body.email);
      if (result.rowCount === 0) {
        return res.status(404).json({
          msg: "Invalid Email",
        });
      }
    //   console.log(result.rows);
    let office = "No data"
      const { id, user_type, user_password } = result.rows[0];
      if (!(await argon.verify(user_password, body.password))) {
        return res.status(401).json({
          msg: "Invalid E-mail or Password",
        });
      }
      if (user_type !== "Student") {
        const result = await selectOffice(id)
        office = result.rows[0].kantor_pengguna
      }
      const payload = {
        id,
        user_type,
        office
      };
      jwt.sign(
        payload,
        jwtKey,
        {
          expiresIn: "30m",
          issuer: issuerWho,
        },
        (error, token) => {
          if (error) throw error;
          res.status(200).json({
            msg: "Successfully Login",
            data: {
              token,
              id,
              user_type,
              office,
            },
          });
        }
      );
    //   console.log(payload);
      // res.status(200).json({
      //   msg: "succes",
      //   data: result.rows[0]
      // })
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "Internal Server Error",
      });
    }
};


module.exports = { registerUser, loginUser };