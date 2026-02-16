import express from "express";
import { Product } from "../models/productModel.js";

export const product = express.Router();

// get all products 
product.get("/", async (req, res, next) => {
  let products = await Product.find();
  res.json(products);
});

//create product 
product.post("/", async (req, res, next) => {
  let newProduct = new Product(req.body);
  let savedProduct = await newProduct.save();

  res.status(201).json({
    message: "Product added",
    product: savedProduct
  });
});

//update product 
product.put("/:id", async (req, res, next) => {
  let updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json({
    message: "Product updated",
    product: updatedProduct
  });
});

// delete product 
product.delete("/:id", async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});
