/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * String and Text Processing
 *
 * Delete Vowels - Tests
 *
 * https://launchschool.com/exercises/8249329a
 *
 */

const deleteVowels = require("./02_delete_vowels");

describe("Deleting vowels from an array of strings", () => {
  it("Should return an empty array when given an empty array", () => {
    expect(deleteVowels.removeVowels([])).toEqual([]);
  });

  it("Should return an array of strings with no vowels", () => {
    expect(deleteVowels.removeVowels(["abcdefghijklmnopqrstuvwxyz"])).toEqual([
      "bcdfghjklmnpqrstvwxyz"
    ]);

    expect(deleteVowels.removeVowels(["ABCDEFGHIJKLMNOPQRSTUVWXYZ"])).toEqual([
      "BCDFGHJKLMNPQRSTVWXYZ"
    ]);

    expect(deleteVowels.removeVowels(["green", "YELLOW", "black", "white"])).toEqual([
      "grn", "YLLW", "blck", "wht"
    ]);

    expect(deleteVowels.removeVowels(["ABC", "AEIOU", "XYZ"])).toEqual([
      "BC", "", "XYZ"
    ]);
  });
});
