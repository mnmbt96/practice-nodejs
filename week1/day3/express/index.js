import express from "express";

const app = express();

function checkAuth(req, res, next) {
  if (req.headers.authorization) {
    next();
  } else {
    res.status(401).send("Authorization failed");
  }
}

app.use((req, res, next) => {
  console.log("Middleware1");
  next();
});

app.get("/health", checkAuth, (req, res) => {
  console.log("Hello");
  res.status(200).send("Hello");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
