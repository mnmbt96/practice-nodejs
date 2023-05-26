const express = require("express");
const router = express.Router();

// router.use(mylogger);

router.get("/", mylogger, (req, res) => {
  res.send("I am an user");
});

router.get("/info", (req, res) => {
  res.send("This is an user information");
});

router.get("/:id", (req, res) => {
  res.send(`${req.params.id}のユーザー情報を取得しました`);
});

// ミドルウェア
function mylogger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
