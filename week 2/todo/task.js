// task.js
// handles task-related operations

// importing validation functions
import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

const tasks = [];
let taskId = 1;

// Task 1: add new task
function addTask(title, priority, dueDate) {
  // validating inputs
  if (!validateTitle(title)) return "Invalid title";
  if (!validatePriority(priority)) return "Invalid priority";
  if (!validateDueDate(dueDate)) return "Invalid due date";

  // adding task if all validations pass
  tasks.push({
    id: taskId++,
    title,
    priority,
    dueDate,
    completed: false
  });

  return "Task added successfully";
}

// Task 2: get all tasks
function getAllTasks() {
  return tasks;
}

// Task 3: mark task as completed
function completeTask(id) {
  let task = tasks.find(t => t.id === id);
  if (!task) return "Task not found";

  task.completed = true;
  return "Task marked as completed";
}

// exporting task functions
export { addTask, getAllTasks, completeTask };
