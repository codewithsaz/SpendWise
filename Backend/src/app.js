"use strict";
require("dotenv").config();
//librabries adn packages
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const app = express();

//import routes
const userRoutes = require("./routes/userRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
const orderRoutes = require("./routes/orderRoutes");
const reportRoutes = require("./routes/reportRoutes");

//Database
const db = require("./utils/database/database");

app.use(
  cors({
    origin: "http://localhost:5174",
    allowedHeader: true,
    credentials: true,
  })
);
app.use(helmet());
app.use(cookieParser());
app.use(express.json());

//Routes
app.use(userRoutes);
app.use(transactionRoutes);
app.use(leaderboardRoutes);
app.use(orderRoutes);
app.use(reportRoutes);

app.use("/test", (req, res) => {
  res.json("Everything working Good");
});
app.listen(8080, () => {
  console.log(`Server working at port 8080`);
});
