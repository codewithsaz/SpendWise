const Router = require("express").Router();

const reportController = require("../controllers/reportController");
const authenticator = require("../middlewares/authenticator");

Router.get(
  "/report/download",
  authenticator.authenticate,
  reportController.downloadExpense
);

Router.get(
  "/report/all",
  authenticator.authenticate,
  reportController.getReports
);

module.exports = Router;
