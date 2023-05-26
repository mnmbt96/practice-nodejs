import express from "express";
import bodyParser from "body-parser";
import productRoute from "./route/productRoute.js";

const app = express();
app.use(bodyParser.json());

app.use("/product", productRoute);

app.listen(3001, () => {
  console.log("Server is running on 3001");
});
