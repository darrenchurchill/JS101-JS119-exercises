/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Sequence Count - Tests
 *
 * https://launchschool.com/exercises/cad01bcb
 *
 */

const sequence = require("./06_sequence_count");

describe("Generating a sequence of numbers", () => {
  it("Should return an empty array when given 0 as the count", () => {
    for (let start = -10; start <= 10; start++) {
      expect(sequence.sequence(0, start)).toEqual([]);
    }
  });

  it("Should return an array of `count` zeros when given 0 as the start", () => {
    for (let count = 1; count <= 10; count++) {
      expect(sequence.sequence(count, 0)).toEqual(Array(count).fill(0));
    }
  });

  it("Should return an array of `count` numbers that are multiples of `start`", () => {
    expect(sequence.sequence(5, 1)).toEqual([1, 2, 3, 4, 5]);
    expect(sequence.sequence(4, -7)).toEqual([-7, -14, -21, -28]);
  });
});
