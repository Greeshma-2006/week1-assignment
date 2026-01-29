// Hands-On 1: Shallow Copy (Controlled Mutation)

// Given data
const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en"
  }
};

// Task 1: Create a shallow copy of user
let userCopy = { ...user };

// Task 2.1: Change name in the copied object
userCopy.name = "Ramesh";

// Task 2.2: Change preferences.theme in the copied object
userCopy.preferences.theme = "light";

// Task 2.3: Log original object
console.log("Original user:", user);

// Task 2.4: Log copied object
console.log("Copied user:", userCopy);


// Hands-On 2: Deep Copy (Isolation & Safety)

// Given data
const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
};

// Task 1: Create a deep copy of order
let orderCopy = JSON.parse(JSON.stringify(order));

// Task 2.1: Modify customer.address.city in copied object
orderCopy.customer.address.city = "Bengaluru";

// Task 2.2: Modify items[0].price in copied object
orderCopy.items[0].price = 75000;

// Task 2.3: Log original object
console.log("Original order:", order);

// Task 2.4: Log copied object
console.log("Copied order:", orderCopy);

