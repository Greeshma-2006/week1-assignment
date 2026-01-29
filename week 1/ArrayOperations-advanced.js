// ==================================================
// #ASSIGNMENT 1: Shopping Cart Summary
// #Scenario: Building a shopping cart summary for an e-commerce website
// ==================================================

// #TestData
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// #Task1: filter() only inStock products
const inStockItems = cart.filter(item => item.inStock);

// #Task2: map() to create { name, totalPrice }
const itemTotals = inStockItems.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));

// #Task3: reduce() to calculate grand total value
const grandTotal = itemTotals.reduce((sum, item) => sum + item.totalPrice, 0);

// #Task4: find() details of "Mouse"
const mouseDetails = cart.find(item => item.name === "Mouse");

// #Task5: findIndex() of "Keyboard"
const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");

console.log("Assignment 1:", inStockItems, itemTotals, grandTotal, mouseDetails, keyboardIndex);


// ==================================================
// #ASSIGNMENT 2: Student Performance Dashboard
// #Scenario: College result analysis system
// ==================================================

// #TestData
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// #Task1: filter() students who passed (marks ≥ 40)
const passedStudents = students.filter(s => s.marks >= 40);

// #Task2: map() to add grade field
const gradedStudents = students.map(s => ({
  ...s,
  grade:
    s.marks >= 90 ? "A" :
    s.marks >= 75 ? "B" :
    s.marks >= 60 ? "C" : "D"
}));

// #Task3: reduce() to calculate average marks
const avgMarks =
  students.reduce((sum, s) => sum + s.marks, 0) / students.length;

// #Task4: find() student who scored 92
const topper = students.find(s => s.marks === 92);

// #Task5: findIndex() of student "Kiran"
const kiranIndex = students.findIndex(s => s.name === "Kiran");

console.log("Assignment 2:", passedStudents, gradedStudents, avgMarks, topper, kiranIndex);


// ==================================================
// #ASSIGNMENT 3: Employee Payroll Processor
// #Scenario: Salary processing module in HR app
// ==================================================

// #TestData
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// #Task1: filter() employees from IT department
const itEmployees = employees.filter(e => e.department === "IT");

// #Task2: map() to add netSalary with 10% bonus
const netSalaries = employees.map(e => ({
  ...e,
  netSalary: e.salary + e.salary * 0.10
}));

// #Task3: reduce() to calculate total salary payout
const totalPayout = employees.reduce((sum, e) => sum + e.salary, 0);

// #Task4: find() employee with salary 30000
const salary30000 = employees.find(e => e.salary === 30000);

// #Task5: findIndex() of employee "Neha"
const nehaIndex = employees.findIndex(e => e.name === "Neha");

console.log("Assignment 3:", itEmployees, netSalaries, totalPayout, salary30000, nehaIndex);


// ==================================================
// #ASSIGNMENT 4: Movie Streaming Platform
// #Scenario: Movie recommendation system
// ==================================================

// #TestData
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// #Task1: filter() only Sci-Fi movies
const sciFiMovies = movies.filter(m => m.genre === "Sci-Fi");

// #Task2: map() to return formatted title and rating
const movieLabels = movies.map(m => `${m.title} (${m.rating})`);

// #Task3: reduce() to calculate average movie rating
const avgRating =
  movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;

// #Task4: find() movie "Joker"
const jokerMovie = movies.find(m => m.title === "Joker");

// #Task5: findIndex() of "Avengers"
const avengersIndex = movies.findIndex(m => m.title === "Avengers");

console.log("Assignment 4:", sciFiMovies, movieLabels, avgRating, jokerMovie, avengersIndex);


// ==================================================
// #ASSIGNMENT 5: Bank Transaction Analyzer
// #Scenario: Bank statement summary
// ==================================================

// #TestData
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// #Task1: filter() all credit transactions
const credits = transactions.filter(t => t.type === "credit");

// #Task2: map() to extract only amounts
const amounts = transactions.map(t => t.amount);

// #Task3: reduce() to calculate final balance
const balance = transactions.reduce(
  (bal, t) => t.type === "credit" ? bal + t.amount : bal - t.amount,
  0
);

// #Task4: find() first debit transaction
const firstDebit = transactions.find(t => t.type === "debit");

// #Task5: findIndex() of transaction with amount 10000
const index10000 = transactions.findIndex(t => t.amount === 10000);

console.log("Assignment 5:", credits, amounts, balance, firstDebit, index10000);
