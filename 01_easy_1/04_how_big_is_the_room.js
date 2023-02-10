/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 1
 *
 * How big is the room?
 *
 * https://launchschool.com/exercises/91eb6f09
 *
 */

const readline = require('readline-sync');
const SQFT_TO_SQM = 10.7639;
const VALID_UNITS = {
  meters: {conversionFn: sqFt, altUnits: 'feet'},
  feet: {conversionFn: sqM, altUnits: 'meters'},
};

function sqFt(squareMeters) {
  return squareMeters * SQFT_TO_SQM;
}

function sqM(squareFeet) {
  return squareFeet / SQFT_TO_SQM;
}

function promptRoomLength(units) {
  console.log(`Enter the length of the room in ${units}:`);
  return Number(readline.prompt());
}

function promptRoomWidth(units) {
  console.log(`Enter the width of the room in ${units}:`);
  return Number(readline.prompt());
}

console.log(`Enter the unit type: [${Object.keys(VALID_UNITS).join("/")}]`);
let units = readline.prompt({limit: Object.keys(VALID_UNITS)}).toLowerCase();

let length = promptRoomLength(units);
let width = promptRoomWidth(units);
let defaultArea = length * width;
let convertedArea = VALID_UNITS[units].conversionFn(defaultArea);

console.log(
  `The area of the room is ${defaultArea.toFixed(2)} square ${units} `
  + `(${convertedArea.toFixed(2)} square ${VALID_UNITS[units].altUnits}).`
);