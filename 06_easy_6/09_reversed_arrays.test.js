/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Reversed Arrays - Tests
 *
 * https://launchschool.com/exercises/9b855a60
 *
 */

const reversedArrays = require("./09_reversed_arrays");

describe("Reversing an array in place", () => {
  it("Should return a reference to the same array", () => {
    const array = [1, 2, 3, 4];
    expect(reversedArrays.reverse(array)).toBe(array);
  });

  it("Should return an empty array when given an empty array", () => {
    expect(reversedArrays.reverse([])).toEqual([]);
  });

  it("Should return the same array when given a single element array", () => {
    expect(reversedArrays.reverse([1])).toEqual([1]);
    expect(reversedArrays.reverse(["abc"])).toEqual(["abc"]);
  });

  it("Should return the array with elements in reverse order", () => {
    expect(reversedArrays.reverse([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    expect(reversedArrays.reverse(["a", "b", "c", "d", "e"])).toEqual([
      "e", "d", "c", "b", "a"
    ]);
    expect(reversedArrays.reverse([1, "a", 3, "c"])).toEqual(["c", 3, "a", 1]);
  });
});
