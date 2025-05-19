// 15.	Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.
// Student Name	Marks
// David	80
// Vinoth	77
// Divya	88
// Ishitha	95
// Thomas	68

let marks = {
  David: 80,
  Vinoth: 77,
  Divya: 88,
  Ishitha: 95,
  Thomas: 68,
};

let total = 0;
let studentCount = 0;

for (let student in marks) {
  total += marks[student];
  studentCount++;
}

let average = total / studentCount;

let grade;

if (average >= 90) {
  grade = "A";
} else if (average >= 80) {
  grade = "B";
} else if (average >= 70) {
  grade = "C";
} else if (average >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Grade: " + grade);
