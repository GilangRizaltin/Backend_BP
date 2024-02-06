const express = require("express");
const officeRouter = express.Router();
const {getOfficeBranchProgram} = require("../Handlers/office.handler")

officeRouter.get("/:id", getOfficeBranchProgram)

module.exports = officeRouter