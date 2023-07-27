const express = require("express");
const router = express.Router();
const {
  getAllArticles,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articleControllers");

router.route("/getAllArticles").get(getAllArticles);

router.route("/createArticle").post(createArticle);

router.route("/updateArticle/:id").post(updateArticle);

router.route("/deleteArticle/:id").post(deleteArticle);

module.exports = router;
