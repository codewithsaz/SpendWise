const Router = require("express").Router();

const leaderboardController = require("../controllers/leaderboardController");
const authenticator = require("../middlewares/authenticator");

Router.get(
  "/leaderboard",
  authenticator.verifyPremiumMembership,
  leaderboardController.getLeaderboard
);

module.exports = Router;
