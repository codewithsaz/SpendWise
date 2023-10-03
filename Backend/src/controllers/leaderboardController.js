const UserModel = require("../models/userModel");

exports.getLeaderboard = async (req, res) => {
  const pageNumber = Number.parseInt(req.query.page);
  const pageSize = Number.parseInt(req.query.size);
  try {
    const skip = (pageNumber - 1) * pageSize;
    const query = UserModel.find({}, "name savings")
      .sort({ savings: -1 })
      .skip(skip)
      .limit(pageSize);
    const totalUsers = await UserModel.countDocuments();

    const leaderboardUsers = await query.exec();
    if (leaderboardUsers) {
      res.status(201).json({
        success: true,
        totalUsers: totalUsers,
        currentPage: pageNumber,
        totalPages: Math.ceil(totalUsers / pageSize),
        leaderboard: leaderboardUsers,
      });
    } else throw new Error("Cant fetch the leaderboard now!");
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
};
