import express from "express";
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/home", { message: "Hello world" });
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(3001, () => {
  console.log("Server is running");
});
