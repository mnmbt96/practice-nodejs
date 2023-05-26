const express = require("express");

const app = express();
const PORT = 3000;
const userRouter = require("./routes/user");

// app.use(mylogger);

//public内のindex.htmlをレンダリング
// app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // console.log("Hello expresss");
  // res.send("Hello");
  // res.sendStatus(404);
  // res.status(500).send("Error");
  // res.status(500).json({
  //   msg: "Error is happening",
  // });

  res.render("index", { text: "Node.js and Express" });
});

// ルーティング
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log("Server is running");
});
