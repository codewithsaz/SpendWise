const Router = require("express").Router();

const expenseController = require("../controllers/expenseController");
const incomeController = require("../controllers/incomeController");
const transactionController = require("../controllers/transactionController");
const authenticator = require("../middlewares/authenticator");

//expense Routes
Router.post(
  "/expense/add",
  authenticator.authenticate,
  expenseController.addExpense
);
Router.get(
  "/expense/all",
  authenticator.authenticate,
  expenseController.getExpenses
);

Router.put(
  "/expense/:referenceID",
  authenticator.authenticate,
  expenseController.updateExpense
);

Router.delete(
  "/expense/:referenceID",
  authenticator.authenticate,
  expenseController.deleteExpense
);

//income Routes
Router.post(
  "/income/add",
  authenticator.authenticate,
  incomeController.addIncome
);
Router.get(
  "/income/all",
  authenticator.authenticate,
  incomeController.getIncome
);

Router.delete(
  "/income/:referenceID",
  authenticator.authenticate,
  incomeController.deleteIncome
);

Router.put(
  "/income/:referenceID",
  authenticator.authenticate,
  incomeController.updateIncome
);

//All transcation routes

Router.get(
  "/transaction/all",
  authenticator.authenticate,
  transactionController.getAllTranscations
);

module.exports = Router;
