import express from "express";
import mongoose from "mongoose";
import { user } from "./API/userApi.js";
import { product } from "./API/productApi.js";


const app = express();

// middleware
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err.message));

// routes
app.use("/api/products", product);
app.use("/api/users", user);


// centralized error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "error",
    reason: err.message
  });
});

// server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
