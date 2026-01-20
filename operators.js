// #Assignment1
// #InitialData: let totalAmount = 0
let totalAmount = 0;

// #Task1: Add ₹500 to the total amount
totalAmount += 500;

// #Task2: Add ₹1200 to the total amount
totalAmount += 1200;

// #Task3: Apply a discount of ₹200
totalAmount -= 200;

// #Task4: Add 18% GST to the total amount
totalAmount += totalAmount * 0.18;

// #Task5: Print the final bill amount
console.log(`Final Bill Amount: ₹${totalAmount.toFixed(2)}`);
