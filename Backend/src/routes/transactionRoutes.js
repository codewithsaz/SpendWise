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

Router.delete(
  "/expense/:referenceID",
  authenticator.authenticate,
  expenseController.deleteExpense
);

//expense Routes
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

//All transcation routes

Router.get(
  "/transaction/all",
  authenticator.authenticate,
  transactionController.getAllTranscations
);

// Router.post("/user/login", UserController.loginUser);
// Router.get(
//   "/user/details",
//   authenticator.authenticate,
//   UserController.getUserDetails
// );

module.exports = Router;
