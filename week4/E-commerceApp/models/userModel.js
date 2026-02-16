import { Schema, model } from "mongoose";

// CART SCHEMA 
const cartSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  }
});

//USER SCHEMA 
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true
    },
    password: {
      type: String,
      required: [true, "Password is required"]
    },
    cart: {
      type: [cartSchema],
      default: []
    }
  },
  { timestamps: true }   
);

//USER MODEL 
export const User = model("User", userSchema);
