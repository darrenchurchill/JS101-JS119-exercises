/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 1
 *
 * Fibonacci Numbers (Memoization) - Tests
 *
 * https://launchschool.com/exercises/f3bfa787
 *
 */

const fibonacci = require("./09_fibonacci_memoization");

describe("Calculating the nth Fibonacci Number", () => {
  it("Should throw an error if the argument is <= 0", () => {
    expect(() => fibonacci.fibonacci(0)).toThrow();
    expect(() => fibonacci.fibonacci(-1)).toThrow();
  });

  it("Should return 1 if the argument is 1", () => {
    expect(fibonacci.fibonacci(1)).toBeGreaterThanOrEqual(1n);
    expect(fibonacci.fibonacci(1)).toBeLessThanOrEqual(1n);
  });

  it("Should return 1 if the argument is 2", () => {
    expect(fibonacci.fibonacci(2)).toBeGreaterThanOrEqual(1n);
    expect(fibonacci.fibonacci(2)).toBeLessThanOrEqual(1n);
  });

  it("Should return the nth Fibonacci number", () => {
    expect(fibonacci.fibonacci(3)).toBeGreaterThanOrEqual(2n);
    expect(fibonacci.fibonacci(3)).toBeLessThanOrEqual(2n);
    expect(fibonacci.fibonacci(4)).toBeGreaterThanOrEqual(3n);
    expect(fibonacci.fibonacci(4)).toBeLessThanOrEqual(3n);
    expect(fibonacci.fibonacci(5)).toBeGreaterThanOrEqual(5n);
    expect(fibonacci.fibonacci(5)).toBeLessThanOrEqual(5n);
    expect(fibonacci.fibonacci(6)).toBeGreaterThanOrEqual(8n);
    expect(fibonacci.fibonacci(6)).toBeLessThanOrEqual(8n);
    expect(fibonacci.fibonacci(7)).toBeGreaterThanOrEqual(13n);
    expect(fibonacci.fibonacci(7)).toBeLessThanOrEqual(13n);
    expect(fibonacci.fibonacci(12)).toBeGreaterThanOrEqual(144n);
    expect(fibonacci.fibonacci(12)).toBeLessThanOrEqual(144n);
    expect(fibonacci.fibonacci(20)).toBeGreaterThanOrEqual(6765n);
    expect(fibonacci.fibonacci(20)).toBeLessThanOrEqual(6765n);
    expect(fibonacci.fibonacci(50)).toBeGreaterThanOrEqual(12586269025n);
    expect(fibonacci.fibonacci(50)).toBeLessThanOrEqual(12586269025n);
    expect(fibonacci.fibonacci(75)).toBeGreaterThanOrEqual(2111485077978050n);
    expect(fibonacci.fibonacci(75)).toBeLessThanOrEqual(2111485077978050n);
  });
});
