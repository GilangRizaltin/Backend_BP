const express = require("express");
const authRouter = express.Router();

const {registerUser, loginUser} = require("../Handlers/auth.handler")

authRouter.post("/register", registerUser)
authRouter.post("/login", loginUser)

module.exports = authRouter