// validator.js
// simple validation functions for todo app

// Task 1: validate task title
// title should not be empty and min 3 characters
function validateTitle(title) {
  return title && title.length >= 3;
}

// Task 2: validate priority
// allowed values: low, medium, high
function validatePriority(priority) {
  const allowed = ["low", "medium", "high"];
  return allowed.includes(priority);
}

// Task 3: validate due date
// due date must be in the future
function validateDueDate(date) {
  return new Date(date) > new Date();
}

// exporting all validators
export { validateTitle, validatePriority, validateDueDate };
