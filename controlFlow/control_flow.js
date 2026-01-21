let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMesssage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMesssage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

let userId = "Employee";
let userProgram;

switch (userId) {
    case "Employee":
        userProgram = "Full Access to Dietary Services";
        break;
    case "Enrolled Member":
        userProgram = "Full Access to Dietary services, one-on-one interaction with a dietician"
        break;
    case "Subscriber":
        userProgram = "Partial Access to Dietary Services"
        break;
    case "Subscriber":
        userProgram = "Please enroll or subscribe to avail this facility"
        break;
    default:
        userProgrm = "Unknown";
}

console.log("User Program:", userProgram)