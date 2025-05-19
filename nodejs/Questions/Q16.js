// 16.	The grades are computed as follows :
// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100	A

let Range = 85;

let grade;

if (Range < 60) {
  grade = "F";
} else if (Range < 70) {
  grade = "D";
} else if (Range < 80) {
  grade = "C";
} else if (Range < 90) {
  grade = "B";
} else if (Range < 100) {
  grade = "A";
} else {
  grade = "Invalid Range";
}

console.log("Grade: " + grade);
