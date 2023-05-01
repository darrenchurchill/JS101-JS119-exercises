/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * Grocery List - Tests
 *
 * https://launchschool.com/exercises/a8fc112c
 *
 */

const groceryList = require("./08_grocery_list");

describe("Generating a 1-dimensional grocery list", () => {
  it("Should return an empty array when given an empty array", () => {
    expect(groceryList.buyFruit([])).toEqual([]);
  });

  it("Should return an array with the correct number of elements", () => {
    expect(groceryList.buyFruit([["apple", 3]])).toHaveLength(3);
    expect(
      groceryList.buyFruit([
        ["apple", 3],
        ["orange", 1],
      ])
    ).toHaveLength(4);
    expect(
      groceryList.buyFruit([
        ["apple", 3],
        ["orange", 1],
        ["banana", 2],
      ])
    ).toHaveLength(6);
  });

  it("Should return an array with the correct elements", () => {
    expect(groceryList.buyFruit([
      ["apple", 3]
    ])).toEqual(["apple", "apple", "apple",]);
    expect(
      groceryList.buyFruit([
        ["apple", 3],
        ["orange", 1],
      ])
    ).toEqual(["apple", "apple", "apple", "orange"]);
    expect(
      groceryList.buyFruit([
        ["apple", 3],
        ["orange", 1],
        ["banana", 2],
      ])
    ).toEqual(["apple", "apple", "apple", "orange", "banana", "banana"]);
  });
});
