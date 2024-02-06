require("dotenv").config();
const express = require("express");
const server = express();
const mainRouter = require("./src/Routers/main.router");
const cors = require("cors");

server.listen(3120, () => {
    console.log("Server is running at port 3120");
  });
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  server.use(express.static("./public"));
  server.use(
    cors({
      origin: "*",
      methods: ["PATCH", "POST", "DELETE"],
    })
  );

  server.use(mainRouter);

  server.get("/", (req, res) => {
    const data = "Hello World";
    res.status(200).json({
      msg: data,
    });
  });