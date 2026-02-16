import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";


export const user = express.Router();

// CREATE USER 
user.post("/", async (req, res, next) => {
  let { name, email, password } = req.body;

  let hashedPassword = await bcrypt.hash(password, 10);

  let newUser = new User({
    name,
    email,
    password: hashedPassword
  });

  let savedUser = await newUser.save();

  res.status(201).json({
    message: "User created successfully",
    user: savedUser
  });
});

// GET ALL USERS 
user.get("/", async (req, res, next) => {
  let users = await User.find();
  res.json(users);
});

// ADD ITEM TO CART (push)
user.post("/:id/cart", async (req, res, next) => {
  let { productId, quantity } = req.body;

  let updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    { $push: { cart: { productId, quantity } } },
    { new: true }
  );

  res.json({
    message: "Item added to cart",
    cart: updatedUser.cart
  });
});

// REMOVE ITEM FROM CART 
user.delete("/:id/cart/:productId", async (req, res, next) => {
  let updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    { $pull: { cart: { productId: req.params.productId } } },
    { new: true }
  );

  res.json({
    message: "Item removed from cart",
    cart: updatedUser.cart
  });
});

// ADD / UPDATE PRODUCT IN CART 
user.put("/:id/cart", async (req, res, next) => {
  let { productId, quantity } = req.body;
  let user = await User.findById(req.params.id);

  let item = user.cart.find(i => i.productId == productId);
  item ? (item.quantity += quantity) : user.cart.push({ productId, quantity });

  await user.save();
  res.json(user);
});

// READ USER BY ID 
user.get("/:id", async (req, res, next) => {
  let user = await User.findById(req.params.id)
    .populate("cart.productId");

  res.json(user);
});
//cart {productid == prod.id} compare 2 product id 
item.productId.toString() === productId
//2 user with one mail


