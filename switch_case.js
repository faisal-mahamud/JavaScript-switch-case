// syntax of the switch statement:

// switch (expression) {
//     case value1:
//         statement1;
//         break;
//     case value2:
//         statement2;
//         break;
//     case value3:
//         statement3;
//         break;
//     default:
//         statement;
// }

// if...else...if statement:

// if (expression === value1) {
//   statement1;
// } else if (expression === value2) {
//   statement2;
// } else if (expression === value3) {
//   statement3;
// } else {
//   statement;
// }

// JavaScript switch case examples

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);

// Using the JavaScript switch statement to get the day count based of a month

let year = 2016;
let month = 2;
let dayCount;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCount = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayCount = 30;
    break;
  case 2:
    // leap year
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
      dayCount = 29;
    } else {
      dayCount = 28;
    }
    break;
  default:
    dayCount = -1; // invalid month
}

console.log(dayCount); // 29
