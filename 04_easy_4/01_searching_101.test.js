/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Searching 101 - Tests
 *
 * https://launchschool.com/exercises/5062a16f
 *
 */

const searching = require("./01_searching_101");

describe('Test Ordinal Numbers', () => {
  it('Should have the correct values up to 30', () => {
    const upTo = 30;
    let results = [
      "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th",
      "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th",
      "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th",
    ];

    results.forEach((result, idx) => {
      let count = idx + 1;
      if (count < upTo) {
        expect(searching.ordinalNum(count, upTo)).toBe(result);
      } else {
        expect(searching.ordinalNum(count, upTo)).toBe("last");
      }

      expect(searching.ordinalNum(count, count)).toBe("last");
    });
  });
});

describe("Test Last in First Nth", () => {
  it('Should not matter which index the "last" element is found in', () => {
    expect(searching.lastInFirstNth([1, 2, 3, 4, 5, 5])).toBe(true);
    expect(searching.lastInFirstNth([1, 2, 3, 4, 5, 4])).toBe(true);
    expect(searching.lastInFirstNth([1, 2, 3, 4, 5, 3])).toBe(true);
    expect(searching.lastInFirstNth([1, 2, 3, 4, 5, 2])).toBe(true);
    expect(searching.lastInFirstNth([1, 2, 3, 4, 5, 1])).toBe(true);
  });

  it("Should return false if the last number is not in the first n-1 numbers", () => {
    expect(searching.lastInFirstNth([1, 2, 3, 4, 5, 6])).toBe(false);
  });
});
