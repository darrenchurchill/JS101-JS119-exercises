/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 1
 *
 * Fibonacci Number Location By Length - Tests
 *
 * https://launchschool.com/exercises/6e4b7641
 *
 */

const fibonacci = require("./06_fibonacci_num_loc_by_len");

describe("Fibonacci Number Generator", () => {
  it("Should throw an error if the argument is <= 0", () => {
    expect(() => fibonacci.fibonacciNumbers(0)).toThrow();
    expect(() => fibonacci.fibonacciNumbers(-1)).toThrow();
  });

  it("Should return the first 2 Fibonacci numbers", () => {
    expect(fibonacci.fibonacciNumbers(2)).toEqual([1n, 1n]);
  });

  it("Should return the first 10 Fibonacci numbers", () => {
    expect(fibonacci.fibonacciNumbers(10)).toEqual([
      1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n, 55n
    ]);
  });
});

describe("Finding the Index of the First Fibonacci Number with a Given Number of Digits", () => {
  it("Should throw an error if the argument is <= 0", () => {
    expect(() => fibonacci.findFibonacciIndexByLength(0)).toThrow();
    expect(() => fibonacci.findFibonacciIndexByLength(-1)).toThrow();
  });

  it("Should return 1 if the argument is 1", () => {
    expect(fibonacci.findFibonacciIndexByLength(1)).toEqual(1);
  });

  it("Should return 7 if the argument is 2", () => {
    expect(fibonacci.findFibonacciIndexByLength(2)).toEqual(7);
  });

  it("Should return 12 if the argument is 3", () => {
    expect(fibonacci.findFibonacciIndexByLength(3)).toEqual(12);
  });

  it("Should return 45 if the argument is 10", () => {
    expect(fibonacci.findFibonacciIndexByLength(10)).toEqual(45);
  });

  it("Should return 74 if the argument is 16", () => {
    expect(fibonacci.findFibonacciIndexByLength(16)).toEqual(74);
  });

  it("Should return 476 if the argument is 100", () => {
    expect(fibonacci.findFibonacciIndexByLength(100)).toEqual(476);
  });

  it("Should return 4782 if the argument is 1000", () => {
    expect(fibonacci.findFibonacciIndexByLength(1000)).toEqual(4782);
  });
});
