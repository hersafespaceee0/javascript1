//conditional statements - allow execution of a code block{} depending on some state/condition/result/comparison

//if else, switch

const birthYear = 1900;
if (2025 - birthYear > 55) {
  console.log("You are too old for this!!");
}

if (2025 - birthYear > 18) {
  console.log("Old enough to access site!!!");
  console.log("Hi, Welcome!");
} else {
  console.log("You are too young and hence not allowed here!!");
}

//grading marks -- >80 A, >65 B, >50 C, <40 E ---
//Do error checking, (marks cannot be below 0 or above 100)

let marks = 27;
if (marks < 0 || marks > 100 || typeof marks !== "number") {
  console.log("Error:-Invalid mark!!");
}
if (marks >= 80) {
  console.log("A");
} else if (marks >= 65) {
  console.log("B");
} else if (marks >= 50) {
  console.log("C");
  console.log("Read harder!!!");
} else if (marks <= 40) {
  console.log("E");
  console.log("Try again");
} else {
  console.log("E");
}

//switch

let marks = 40;

function grade(score) {
  switch (true) {
    case score >= 80:
      return "A";
      break;
    case score >= 65:
      return "B";
      break;
    case score >= 50:
      return "C";
      break;
    case score >= 40:
      return "D";
      break;
    default:
      return "E";
  }
}
