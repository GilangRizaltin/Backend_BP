const {addOffice, getOffice, getProgramByOffice} = require("../Models/office.model")

const getOfficeBranchProgram = async (req, res) => {
      try {
          const { params } = req;
          const result = await getProgramByOffice(params.id);
          if (result.rowCount === 0) {
            return res.status(404).json({
                msg: `Data not found`,
                res: result
            });
        };
          res.status(200).json({
              msg: `Successfully get program`,
              data: result.rows
          });
      } catch (error) {
          console.error(error);
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

  module.exports = { getOfficeBranchProgram };