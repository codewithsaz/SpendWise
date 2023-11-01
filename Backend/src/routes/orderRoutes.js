const Router = require("express").Router();

const orderController = require("../controllers/orderController");
const authenticator = require("../middlewares/authenticator");

Router.get(
  "/purchase/premium",
  authenticator.authenticate,
  orderController.purchaseMembership
);

Router.post(
  "/purchase/success",
  authenticator.authenticate,
  orderController.purchaseComplete
);

Router.post(
  "/purchase/failed",
  authenticator.authenticate,
  orderController.purchaseFailed
);
module.exports = Router;
