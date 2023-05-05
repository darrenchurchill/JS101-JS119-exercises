/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 2
 *
 * Next Featured Number Higher than a Given Value - Tests
 *
 * https://launchschool.com/exercises/135a426a
 *
 */

const nextFeaturedNumber = require("./05_next_featured_number");

describe("Finding the next featured number", () => {
  it("Should return true if the number is odd, a multiple of 7, and has all unique digits", () => {
    expect(nextFeaturedNumber.isFeatured(7)).toBe(true);
    expect(nextFeaturedNumber.isFeatured(21)).toBe(true);
    expect(nextFeaturedNumber.isFeatured(35)).toBe(true);
    expect(nextFeaturedNumber.isFeatured(49)).toBe(true);
    expect(nextFeaturedNumber.isFeatured(63)).toBe(true);
    expect(nextFeaturedNumber.isFeatured(1029)).toBe(true);
    expect(nextFeaturedNumber.isFeatured(9876543201)).toBe(true);
  });

  it("Should return false if the number is an even multiple of 7", () => {
    expect(nextFeaturedNumber.isFeatured(14)).toBe(false);
  });

  it("Should return false if the number is not a multiple of 7", () => {
    expect(nextFeaturedNumber.isFeatured(1)).toBe(false);
    expect(nextFeaturedNumber.isFeatured(2)).toBe(false);
    expect(nextFeaturedNumber.isFeatured(3)).toBe(false);
    expect(nextFeaturedNumber.isFeatured(4)).toBe(false);
    expect(nextFeaturedNumber.isFeatured(5)).toBe(false);
  });

  it("Should return false if the number is an odd multiple of 7 but has duplicate digits", () => {
    expect(nextFeaturedNumber.isFeatured(77)).toBe(false);
  });
});

describe("Finding the next featured number", () => {
  it("Should throw an error given 9876543201", () => {
    expect(() => nextFeaturedNumber.featured(9876543201)).toThrow();
  });

  it("Should return 21 given 12", () => {
    expect(nextFeaturedNumber.featured(12)).toBe(21);
  });

  it("Should return 21 given 20", () => {
    expect(nextFeaturedNumber.featured(20)).toBe(21);
  });

  it("Should return 35 given 21", () => {
    expect(nextFeaturedNumber.featured(21)).toBe(35);
  });

  it("Should return 1029 given 997", () => {
    expect(nextFeaturedNumber.featured(997)).toBe(1029);
  });

  it("Should return 1043 given 1029", () => {
    expect(nextFeaturedNumber.featured(1029)).toBe(1043);
  });

  it("Should return 1023547 given 999999", () => {
    expect(nextFeaturedNumber.featured(999999)).toBe(1023547);
  });

  it("Should return 1023456987 given 999999987", () => {
    expect(nextFeaturedNumber.featured(999999987)).toBe(1023456987);
  });

  it("Should return 9876543201 given 9876543186", () => {
    expect(nextFeaturedNumber.featured(9876543186)).toBe(9876543201);
  });

  it("Should return 9876543201 given 9876543200", () => {
    expect(nextFeaturedNumber.featured(9876543200)).toBe(9876543201);
  });
});
