// Project: Online Learning Platform Data Engine


// ---------------- DATA SETUP ----------------
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};


// ==================================================
// MODULE 1: USER PROCESSING ENGINE
// ==================================================

// Task 1: get only active users
const activeUsers = users.filter(u => u.active);

// Task 2: extract names of active users
const activeUserNames = activeUsers.map(u => u.name);

// Task 3: check if any admin exists
const hasAdmin = users.some(u => u.role === "admin");

// Task 4: find user by id
const userById = users.find(u => u.id === 2);

// Task 5: deactivate a user immutably
const updatedUsers = users.map(u =>
  u.id === 1 ? { ...u, active: false } : u
);

console.log("Module 1:", activeUsers, activeUserNames, hasAdmin, userById, updatedUsers);


// ==================================================
// MODULE 2: COURSE CATALOG ENGINE
// ==================================================

// Task 1: get published courses
const publishedCourses = courses.filter(c => c.published);

// Task 2: sort courses by price (high to low)
const sortedCourses = [...publishedCourses].sort((a, b) => b.price - a.price);

// Task 3: extract title and price only
const courseSummary = sortedCourses.map(c => ({
  title: c.title,
  price: c.price
}));

// Task 4: calculate total value of published courses
const totalCourseValue = publishedCourses.reduce(
  (sum, c) => sum + c.price, 0
);

// Task 5: add a new course immutably
const newCourses = [
  ...courses,
  { id: 104, title: "Python", price: 1199, published: true }
];

console.log("Module 2:", publishedCourses, courseSummary, totalCourseValue, newCourses);


// ==================================================
// MODULE 3: SHOPPING CART ENGINE
// ==================================================

// Task 1: merge cart with course details
const cartDetails = cart.map(item => {
  const course = courses.find(c => c.id === item.courseId);
  return { ...course, qty: item.qty };
});

// Task 2: calculate total cart amount
const cartTotal = cartDetails.reduce(
  (sum, item) => sum + item.price * item.qty, 0
);

// Task 3: increase quantity immutably
const updatedCart = cart.map(item =>
  item.courseId === 101 ? { ...item, qty: item.qty + 1 } : item
);

// Task 4: remove a course from cart
const filteredCart = cart.filter(item => item.courseId !== 103);

// Task 5: check if all cart items are paid courses
const allPaid = cartDetails.every(item => item.price > 0);

console.log("Module 3:", cartDetails, cartTotal, updatedCart, filteredCart, allPaid);


// ==================================================
// MODULE 4: ROLE & PERMISSION ENGINE
// ==================================================

// Task 1: get all role names
const roleNames = Object.keys(roles);

// Task 2: check if student can delete
const canStudentDelete = roles.student.includes("delete");

// Task 3: get flat list of unique permissions
const allPermissions = [...new Set(
  Object.values(roles).flat()
)];

// Task 4: add moderator role immutably
const updatedRoles = {
  ...roles,
  moderator: ["view", "update"]
};

console.log("Module 4:", roleNames, canStudentDelete, allPermissions, updatedRoles);
