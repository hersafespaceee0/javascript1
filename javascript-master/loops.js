// A loop is used to execute a block of code {} repeatedly for a number of times.

//while loop
let startingPoint = 40;

while (startingPoint < 400) {
  console.log("Loop number" + startingPoint);
  startingPoint = startingPoint + 3; //increase starting point by three after every loop.
}
//forever loop/infinite loop -- never-ending loop.

//array - list with many numbers
let studentMarks = [23, 56, 83, 90, 12, -2, 98, 76, 54, 36];
console.log(studentMarks[1]);

let index = 0;

while (index < studentMarks.length) {
  //grading
  let currentMark = studentMarks[index];
  if (currentMark < 0 || currentMark > 100 || typeof currentMark !== "number") {
    console.log("Error:-Invalid mark!!");
  } else if (currentMark >= 80) {
    console.log("Mark" + currentMark + "is A");
  } else if (currentMark >= 65) {
    console.log("Mark" + currentMark + "is B");
  } else if (currentMark >= 50) {
    console.log("Mark" + currentMark + "is C");
  } else if (currentMark >= 40) {
    console.log("Mark" + currentMark + "is D");
  } else {
    console.log("Mark" + currentMark + "is E");
  }
  //increment index
  index = index + 1;
}
//rewrite this loop using a for loop
