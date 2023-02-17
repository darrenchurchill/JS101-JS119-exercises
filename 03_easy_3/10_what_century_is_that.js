/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 3
 *
 * What Century is That?
 *
 * https://launchschool.com/exercises/394e1c53
 *
 */

function ordinalIndicator(num) {
  let tensRemainder = num % 100;
  let ones = tensRemainder % 10;

  if (ones === 0
      || (4 <= ones && ones <= 9)
      || (11 <= tensRemainder && tensRemainder <= 19)) return 'th';
  else if (ones === 1) return 'st';
  else if (ones === 2) return 'nd';
  else if (ones === 3) return 'rd';

  return '';  // should never get here.
}

function ordinal(num) {
  return `${num}${ordinalIndicator(num)}`;
}

function century(year) {
  return ordinal(Math.ceil(year / 100));
}


console.log(century(2000) === "20th");
console.log(century(2001) === "21st");
console.log(century(1965) === "20th");
console.log(century(256) === "3rd");
console.log(century(5) === "1st");
console.log(century(10103) === "102nd");
console.log(century(1052) === "11th");
console.log(century(1127) === "12th");
console.log(century(11201) === "113th");