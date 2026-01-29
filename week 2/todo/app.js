// app.js
// main file to test todo app modules

// importing task functions
import { addTask, getAllTasks, completeTask } from "./task.js";

// adding tasks
console.log(addTask("Learn JS", "high", "2026-01-20"));
console.log(addTask("Buy groceries", "medium", "2026-02-01"));
console.log(addTask("Hi", "low", "2026-02-10")); // invalid title

// displaying all tasks
console.log("All Tasks:", getAllTasks());

// completing a task
console.log(completeTask(1));

// displaying tasks again
console.log("Updated Tasks:", getAllTasks());
