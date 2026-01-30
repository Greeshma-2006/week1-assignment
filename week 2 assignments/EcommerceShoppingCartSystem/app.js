// app.js
// main app testing file

import { getAllProducts, searchProducts } from "./product.js";
import { addToCart, getCartItems, getCartTotal, updateQuantity, removeFromCart } from "./cart.js";
import { processPayment } from "./payment.js";

console.log("All products:");
console.log(getAllProducts());

console.log("\nSearch phone:");
console.log(searchProducts("phone"));

console.log("\nAdding to cart:");
console.log(addToCart(1, 2));
console.log(addToCart(3, 3));
console.log(addToCart(1, 1));

console.log("\nCart:");
console.log(getCartItems());
console.log("Total:", getCartTotal());

console.log("\nUpdating quantity:");
console.log(updateQuantity(1, 2));

console.log("\nRemoving item:");
console.log(removeFromCart(3));

console.log("\nUpdated Cart:");
console.log(getCartItems());
console.log("Total:", getCartTotal());

console.log("\nCheckout:");
console.log(processPayment("upi", "WELCOME10"));
