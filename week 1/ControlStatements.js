
// #HANDS-ON 1: Smart Login Status Engine
// #InitialData
let isLoggedIn = true;
let isProfileComplete = false;

// #Task1: If user is not logged in → show "Please login"
let message = "";
if (!isLoggedIn) {
  message = "Please login";
}

// #Task2: If logged in but profile incomplete → show "Complete your profile"
if (isLoggedIn && !isProfileComplete) {
  message = "Complete your profile";
}

// #Task3: If logged in and profile complete → show "Welcome back!"
if (isLoggedIn && isProfileComplete) {
  message = "Welcome back!";
}

// #Task4: Store the final result in message
// (Result is assigned in the above conditions)

// #Task5: Print the message
console.log("HANDS-ON 1 Output:", message);



// #HANDS-ON 2: Course Price Tag Labeler
// #InitialData
let price = 1299;

// #Task1: If price is less than 500 → "Budget Course"
let courseTag = "";
if (price < 500) {
  courseTag = "Budget Course";
}

// #Task2: If price is between 500 and 1000 → "Standard Course"
if (price >= 500 && price <= 1000) {
  courseTag = "Standard Course";
}

// #Task3: If price is greater than 1000 → "Premium Course"
if (price > 1000) {
  courseTag = "Premium Course";
}

// #Task4: Store the label in courseTag
// (Label stored via conditional assignments)

// #Task5: Print the label
console.log("HANDS-ON 2 Output:", courseTag);


// #HANDS-ON 3: Enrollment Eligibility Checker
// #InitialData
let hasPaid = true;
let hasCompletedBasics = false;

// #Task1: Check if payment and basics completion are true
let enrollMessage =
  hasPaid && hasCompletedBasics
    ? "Enroll Now"
    : "Complete Requirements";

// #Task2: If condition fails, assign alternative message
// (Handled in ternary else part)

// #Task3: Use ternary operator for decision making
// (Ternary operator already applied above)

// #Task4: Store result in enrollMessage
// (Stored during ternary evaluation)

// #Task5: Print the enrollment message
console.log("HANDS-ON 3 Output:", enrollMessage);
