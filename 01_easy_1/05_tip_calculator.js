/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 1
 *
 * Tip Calculator
 *
 * https://launchschool.com/exercises/824a7ad1
 *
 */

const readline = require('readline-sync');

function promptBillAmount() {
  return readline.questionFloat('What is the bill? ');
}

function promptTipPercentage() {
  return readline.questionFloat('What is the tip percentage? ');
}

function calcTip(billAmount, tipPercentage) {
  return billAmount * (tipPercentage / 100);
}

function calcTotalBill(billAmount, tipAmount) {
  return billAmount + tipAmount;
}

function displayBill(tipAmount, billTotal) {
  console.log(`\nThe tip is $${tipAmount.toFixed(2)}`);
  console.log(`The total is $${billTotal.toFixed(2)}`);
}

let billAmount = promptBillAmount();
let tipPercentage = promptTipPercentage();
let tipAmount = calcTip(billAmount, tipPercentage);
let billTotal = calcTotalBill(billAmount, tipAmount);

displayBill(tipAmount, billTotal);