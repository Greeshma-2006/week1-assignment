// cart.js
// shopping cart logic

import { getProductById, checkStock } from "./product.js";

let cartItems = [];

// add item to cart
export function addToCart(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return "Product not found";

  if (!checkStock(productId, quantity)) {
    return "Not enough stock";
  }

  let item = cartItems.find(c => c.productId === productId);
  if (item) {
    item.qty += quantity;
  } else {
    cartItems.push({ productId, qty: quantity });
  }

  return "Item added to cart";
}

// remove item from cart
export function removeFromCart(productId) {
  cartItems = cartItems.filter(c => c.productId !== productId);
  return "Item removed";
}

// update quantity
export function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId, newQuantity)) {
    return "Not enough stock";
  }

  let item = cartItems.find(c => c.productId === productId);
  if (!item) return "Item not in cart";

  item.qty = newQuantity;
  return "Quantity updated";
}

// get cart items with product info
export function getCartItems() {
  return cartItems.map(item => {
    const product = getProductById(item.productId);
    return { ...product, qty: item.qty };
  });
}

// calculate total
export function getCartTotal() {
  return getCartItems().reduce(
    (sum, item) => sum + item.price * item.qty, 0
  );
}

// clear cart
export function clearCart() {
  cartItems = [];
}
