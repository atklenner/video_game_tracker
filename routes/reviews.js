const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviewsController");

router.get("/edit-review/:id", reviewsController.addReviewPage);

router.get("/:id", reviewsController.getReview);

router.post("/new-review/:gameId", reviewsController.addReview);

router.put("/update-review/:id", reviewsController.updateReview);

router.put("/like-review/:id", reviewsController.likeReview);

router.delete("/delete-review/:id", reviewsController.deleteReview);

module.exports = router;
