// ==========================================
// #Assignment 1: Daily Temperature Analyzer
// #Scenario: Analyzing daily temperatures recorded by a weather app
// ==========================================

// #TestData
const temperatures = [32, 35, 28, 40, 38, 30, 42];

// #Task1: filter() temperatures above 35
const above35 = temperatures.filter(t => t > 35);
console.log("Task1 - Above 35:", above35);

// #Task2: map() to convert Celsius to Fahrenheit
const toFahrenheit = temperatures.map(t => (t * 9) / 5 + 32);
console.log("Task2 - Fahrenheit:", toFahrenheit);

// #Task3: reduce() to calculate average temperature
const avgTemp =
  temperatures.reduce((sum, t) => sum + t, 0) / temperatures.length;
console.log("Task3 - Average:", avgTemp);

// #Task4: find() first temperature above 40
const firstAbove40 = temperatures.find(t => t > 40);
console.log("Task4 - First above 40:", firstAbove40);

// #Task5: findIndex() of temperature 28
const index28 = temperatures.findIndex(t => t === 28);
console.log("Task5 - Index of 28:", index28);


// ==========================================
// #Assignment 2: Online Course Name Processor
// #Scenario: Preparing course list for website display
// ==========================================

// #TestData
const courses = ["javascript", "react", "node", "mongodb", "express"];

// #Task1: filter() courses with name length > 5
const longCourses = courses.filter(c => c.length > 5);
console.log("Task1 - Length > 5:", longCourses);

// #Task2: map() to convert course names to uppercase
const upperCourses = courses.map(c => c.toUpperCase());
console.log("Task2 - Uppercase:", upperCourses);

// #Task3: reduce() to generate a single formatted string
const courseString = upperCourses.reduce((a, b) => a + " | " + b);
console.log("Task3 - Combined String:", courseString);

// #Task4: find() the course 'react'
const findReact = courses.find(c => c === "react");
console.log("Task4 - Found react:", findReact);

// #Task5: findIndex() of 'node'
const indexNode = courses.findIndex(c => c === "node");
console.log("Task5 - Index of node:", indexNode);


// ==========================================
// #Assignment 3: Student Marks List
// #Scenario: Processing marks received from exam system
// ==========================================

// #TestData
const marks = [78, 92, 35, 88, 40, 67];

// #Task1: filter() marks ≥ 40 (pass marks)
const passed = marks.filter(m => m >= 40);
console.log("Task1 - Passed:", passed);

// #Task2: map() to add 5 grace marks
const withGrace = marks.map(m => m + 5);
console.log("Task2 - Grace Marks:", withGrace);

// #Task3: reduce() to find highest mark
const highest = marks.reduce((max, m) => (m > max ? m : max));
console.log("Task3 - Highest Mark:", highest);

// #Task4: find() first mark below 40
const firstFail = marks.find(m => m < 40);
console.log("Task4 - First Fail:", firstFail);

// #Task5: findIndex() of mark 92
const index92 = marks.findIndex(m => m === 92);
console.log("Task5 - Index of 92:", index92);
