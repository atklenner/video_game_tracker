const List = require("../models/List");
const User = require("../models/User");

module.exports = {
  getHomePage: async (req, res) => {
    try {
      let user = await User.findById(req.user._id).populate("lists").lean();
      let mainList = await List.findById(user.mainList)
        .populate("games")
        .lean();
      res.render("index", {
        user: req.user,
        lists: user.lists,
        mainList,
      });
    } catch (error) {
      console.error(error);
    }
  },
};
