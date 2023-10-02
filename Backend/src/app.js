"use strict";

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

app.use(cors());
app.use(helmet());

app.use("/", (req, res) => {
  res.json("Everything working Good");
});
app.listen(8080, () => {
  console.log(`Server working at port 8080`);
});
