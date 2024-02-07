const {getStudent,getProfile,  addStudent, editStudent, deleteStudent} = require("../Models/users.model")
const argon = require("argon2");

const getStudentData = async (req, res) => {
    try {
        const {office} = req.userInfo
        // console.log(user_office)
        if (office === "No data") {
            return res.status(403).json({
                msg: `Access Denied`,
            });
        }
        const result = await getStudent(office);
        if (result.rowCount === 0) {
            return res.status(404).json({
                msg: `Data not found`,
            });
        }
        res.status(200).json({
            msg: `Successfully get student`,
            data: result.rows
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Internal server error",
        });
    }
}

const getStudentProfile = async (req, res) => {
    try {
        const {id} = req.userInfo
        // console.log(user_office)
        const result = await getProfile(id);
        if (result.rowCount === 0) {
            return res.status(404).json({
                msg: `Data not found`,
            });
        }
        res.status(200).json({
            msg: `Successfully get student`,
            data: result.rows
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Internal server error",
        });
    }
}

const registerStudent = async (req, res) => {
    try {
        const { body } = req;
        const hashedPassword = await argon.hash(body.password);
        const registering = await addStudent(body, hashedPassword);
        const createdUser = registering.rows[0];
        res.status(201).json({
            msg: `Student account successfully created with full name : ${createdUser.full_name}`,
          });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Internal server error",
        });
    }
};

const editStudentData = async (req, res) => {
    try {
        const {id} = req.userInfo
        const {body} = req;
        const result = await editStudent(id, body)
        if (result.rowCount === 0) {
            return res.status(404).json({
                msg: `Data not found`,
            });
        };
        res.status(200).json({
            msg: `Student account successfully updated`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Internal server error",
        });
    }
}

const editStudentDataByEmployee = async (req, res) => {
    try {
        const {body, params} = req;
        console.log(params)
        const result = await editStudent(params.student_id, body)
        if (result.rowCount === 0) {
            return res.status(404).json({
                msg: `Data not found`,
            });
        };
        res.status(200).json({
            msg: `Student account successfully updated`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Internal server error",
        });
    }
}

const deleteStudentData = async (req, res) => {
    try {
        const { params } = req;
        const result = await deleteStudent(params.student_id);
        if (result.rowCount === 0) {
            return res.status(404).json({
                msg: `Data not found`,
            });
        }
        const deletedUser = result.rows[0];
        res.status(200).json({
            msg: `Student account successfully deleted with full name : ${deletedUser.nama}`,
          });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Internal server error",
        });
    }
}

module.exports = { getStudentData, registerStudent, getStudentProfile,editStudentData,editStudentDataByEmployee, deleteStudentData };