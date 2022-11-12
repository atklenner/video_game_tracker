const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const gamesController = require("../controllers/gamesController");

router.get("/", gamesController.getAllGames);

router.get("/edit-game", gamesController.addGamePage);

router.get("/:id", gamesController.getOneGame);

router.post("/new-game", upload.single("image"), gamesController.addNewGame);

router.get("/edit-game/:id", gamesController.updateGamePage);

router.put(
  "/update-game/:id",
  upload.single("image"),
  gamesController.updateGame
);

router.delete("/delete-game/:id", gamesController.deleteGame);

module.exports = router;
