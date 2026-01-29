// payment.js
// payment processing logic

import { reduceStock } from "./product.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";
import { applyDiscount } from "./discount.js";

// validate payment method
export function validatePaymentMethod(method) {
  return ["card", "upi", "cod"].includes(method);
}

// process payment
export function processPayment(method, couponCode = null) {
  if (!validatePaymentMethod(method)) {
    return { status: "failed", message: "Invalid payment method" };
  }

  const items = getCartItems();
  const subtotal = getCartTotal();

  let discountData = couponCode
    ? applyDiscount(subtotal, couponCode, items)
    : { discount: 0, finalTotal: subtotal };

  items.forEach(item => reduceStock(item.id, item.qty));
  clearCart();

  return {
    orderId: "ORD" + Date.now(),
    items,
    subtotal,
    discount: discountData.discount,
    total: discountData.finalTotal,
    paymentMethod: method,
    status: "success",
    message: "Order placed successfully"
  };
}
