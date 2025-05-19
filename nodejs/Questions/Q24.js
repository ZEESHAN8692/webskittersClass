// 24.	Write a JavaScript program to find the leap years in a given range of years.

function findLeapYears(startYear, endYear) {
  const leapYears = [];

  for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leapYears.push(year);
    }
  }

  return leapYears;
}

const start = 2000;
const end = 2025;
const result = findLeapYears(start, end);
console.log("Leap years between", start, "and", end, "are:", result);
