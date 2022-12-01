const Comment = require("../models/Comment");

module.exports = {
  likeComment: async (req, res) => {
    try {
      let comment = await Comment.findById(req.params.id);
      if (comment.user._id.toString() === req.user._id.toString()) next();
      await comment.updateOne({ $inc: { likes: 1 } });
      res.redirect("back");
    } catch (error) {
      console.log(error);
    }
  },
  deleteComment: async (req, res) => {
    try {
      let comment = await Comment.findById(req.params.id);
      if (comment.user._id.toString() !== req.user._id.toString()) next();
      await comment.remove();
      res.redirect("back");
    } catch (error) {
      console.log(error);
    }
  }
}
