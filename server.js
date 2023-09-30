const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const express = require("express");
const app = express();
require("./Database/connection");
const router = require("./Router/user.router");

app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(router);

app.listen(8000, (error) => {
  if (!error) {
    console.log("server created successfully");
  }
});
