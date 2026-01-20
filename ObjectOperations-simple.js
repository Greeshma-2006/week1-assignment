// ==================================================
// #ASSIGNMENT 1: User Profile Manager
// #Scenario: Managing a logged-in user’s profile in a web application
// ==================================================

// #TestData
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

// #Task1: Read and print the user’s name and email
console.log("Name:", user.name);
console.log("Email:", user.email);

// #Task2: Add a new property lastLogin
user.lastLogin = "2026-01-01";

// #Task3: Update role from "student" to "admin"
user.role = "admin";

// #Task4: Delete the isActive property
delete user.isActive;

// #Task5: Use Object.keys() to list all remaining fields
console.log("Remaining Fields:", Object.keys(user));


// ==================================================
// #ASSIGNMENT 2: Exam Result Summary
// #Scenario: Marks are stored subject-wise for a student
// ==================================================

// #TestData
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// #Task1: Calculate total marks
let totalMarks = 0;
for (let subject in marks) {
  totalMarks += marks[subject];
}
console.log("Total Marks:", totalMarks);

// #Task2: Calculate average marks
let averageMarks = totalMarks / Object.keys(marks).length;
console.log("Average Marks:", averageMarks);

// #Task3: Find the highest scoring subject
let highestSubject = "";
let highestMarks = 0;
for (let subject in marks) {
  if (marks[subject] > highestMarks) {
    highestMarks = marks[subject];
    highestSubject = subject;
  }
}
console.log("Highest Scoring Subject:", highestSubject);

// #Task4: Add a new subject computer: 90
marks.computer = 90;
console.log("Updated Marks Object:", marks);


// ==================================================
// #ASSIGNMENT 3: Application Settings Controller
// #Scenario: Managing user preferences as application settings
// ==================================================

// #TestData
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

// #Task1: Toggle theme between "light" and "dark"
settings.theme = settings.theme === "light" ? "dark" : "light";

// #Task2: Turn autoSave to true
settings.autoSave = true;

// #Task3: Remove the notifications setting
delete settings.notifications;

// #Task4: Freeze the settings object so it cannot be modified
Object.freeze(settings);

// #Final Output
console.log("Final Settings:", settings);
