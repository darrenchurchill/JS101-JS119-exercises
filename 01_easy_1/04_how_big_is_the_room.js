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

function sqft(squareMeters) {
  return squareMeters * 10.7639;
}

function promptRoomLength() {
  console.log("Enter the length of the room in meters:");
  return Number(readline.prompt());
}

function promptRoomWidth() {
  console.log("Enter the width of the room in meters:");
  return Number(readline.prompt());
}

let length = promptRoomLength();
let width = promptRoomWidth();
let sqMeters = length * width;
console.log(
  `The area of the room is ${sqMeters.toFixed(2)} square meters `
  + `(${sqft(sqMeters).toFixed(2)} square feet).`
);