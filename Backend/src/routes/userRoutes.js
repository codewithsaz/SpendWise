const Router = require("express").Router();

const UserController = require("../controllers/userController");
const authenticator = require("../middlewares/authenticator");

Router.post("/user/register", UserController.registerUser);
Router.post("/user/login", UserController.loginUser);
Router.get(
  "/user/details",
  authenticator.authenticate,
  UserController.getUserDetails
);

module.exports = Router;
