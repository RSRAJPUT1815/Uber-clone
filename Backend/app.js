const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const corse = require('cors');
const app = express();

app.use(corse());


app.get("/", (req, res) => {
  res.send("Hello World!");
});


module.exports = app;