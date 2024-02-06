const express = require("express");
const mainRouter = express.Router();

const authRouter = require("./auth.router");
const officeRouter = require("./office.router");
const userRouter = require("./users.router");

mainRouter.use("/auth", authRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/office", officeRouter);

module.exports = mainRouter;