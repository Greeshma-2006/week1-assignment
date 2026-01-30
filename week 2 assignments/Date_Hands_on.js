// Assignment 1: Date creation & extraction
let now = new Date(); // current date & time

// Task 1 & 2: extract date and time values
let d = now.getDate();
let m = now.getMonth() + 1;
let y = now.getFullYear();
let h = now.getHours();
let min = now.getMinutes();
let s = now.getSeconds();

// Task 3: display in DD-MM-YYYY HH:mm:ss
console.log(
  String(d).padStart(2, "0") + "-" +
  String(m).padStart(2, "0") + "-" +
  y + " " +
  String(h).padStart(2, "0") + ":" +
  String(min).padStart(2, "0") + ":" +
  String(s).padStart(2, "0")
);


// Assignment 2: Date comparison & validation
let enrollmentDeadline = new Date("2026-01-20");
let today = new Date();

// Task 1: check deadline
console.log(today < enrollmentDeadline ? "Enrollment Open" : "Enrollment Closed");

// Task 2: validate date
let input = "2026-02-30";
let testDate = new Date(input);
console.log(testDate.getDate() === 30 && testDate.getMonth() === 1 ? "Valid Date" : "Invalid Date");


// Assignment 3: Age calculator
let dob = "2000-05-15";
let birthDate = new Date(dob);

// Task 1: calculate exact age
let age = today.getFullYear() - birthDate.getFullYear();
if (
  today.getMonth() < birthDate.getMonth() ||
  (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
) {
  age--;
}

console.log("Age:", age);
