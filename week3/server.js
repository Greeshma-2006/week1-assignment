import express from "express";
import userAPI from "./API/userAPI.js";
import productAPI from "./API/productAPI.js";

var app = express();

// read json
app.use(express.json());

// api connections
app.use("/user-api", userAPI);
app.use("/product-api", productAPI);

// start server
app.listen(3000, function () {
  console.log("Server running on port 3000");
});
