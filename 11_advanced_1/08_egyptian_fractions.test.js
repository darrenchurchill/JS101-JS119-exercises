/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Advanced 1
 *
 * Egyptian Fractions - Tests
 *
 * https://launchschool.com/exercises/8be56b7e
 *
 */

const Fraction = require("fraction.js");

const egyptianFractions = require("./08_egyptian_fractions");

describe("Converting rational numbers to Egyptian fractions", () => {
  it("Should throw an error if the argument is not a Fraction object", () => {
    expect(() => egyptianFractions.egyptian("Hello World!")).toThrow(TypeError);
  });

  it("Should return [] if the argument is 0", () => {
    expect(egyptianFractions.egyptian(new Fraction(0))).toEqual([]);
  });

  it("Should return [1] if the argument is 1", () => {
    expect(egyptianFractions.egyptian(new Fraction(1))).toEqual([1]);
  });

  it("Should return the fraction's denominator if the argument is a unit fraction", () => {
    expect(egyptianFractions.egyptian(new Fraction(1, 2))).toEqual([2]);
    expect(egyptianFractions.egyptian(new Fraction(1, 3))).toEqual([3]);
    expect(egyptianFractions.egyptian(new Fraction(1, 4))).toEqual([4]);
    expect(egyptianFractions.egyptian(new Fraction(1, 5))).toEqual([5]);
    expect(egyptianFractions.egyptian(new Fraction(1, 6))).toEqual([6]);
  });

  it("Should return the correct value if the argument is not a unit fraction", () => {
    expect(egyptianFractions.egyptian(new Fraction(2, 1))).toEqual([
      1, 2, 3, 6
    ]);
    expect(egyptianFractions.egyptian(new Fraction(3, 1))).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960
    ]);
  });
});

describe("Converting Egyptian fractions to rational numbers", () => {
  it("Should throw an error if the argument is not an array", () => {
    expect(() => egyptianFractions.unegyptian("Hello World!")).toThrow(TypeError);
  });

  it("Should throw an error if the argument is an empty array", () => {
    expect(() => egyptianFractions.unegyptian([])).toThrow(TypeError);
  });

  it("Should return 1 if the argument is [1]", () => {
    expect(egyptianFractions.unegyptian([1])).toBe(1);
  });

  it("Should return 1/2 if the argument is [2]", () => {
    expect(egyptianFractions.unegyptian([2])).toBeCloseTo(1 / 2);
  });

  it("Should return the correct value if the array contains more than one element", () => {
    expect(egyptianFractions.unegyptian([1, 2, 3, 4, 5])).toBeCloseTo(
      (1 / 1) + (1 / 2) + (1 / 3) + (1 / 4) + (1 / 5)
    );

    expect(egyptianFractions.unegyptian([1, 3, 5, 7, 9, 11])).toBeCloseTo(
      (1 / 1) + (1 / 3) + (1 / 5) + (1 / 7) + (1 / 9) + (1 / 11)
    );
  });
});
