/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * Inventory Item Transactions - Tests
 *
 * https://launchschool.com/exercises/1e53cc84
 *
 */

const itemTransactions = require("./09_inventory_item_transactions");

describe("Filtering transactions by item ID", () => {
  it("Should return an empty array when given an empty array", () => {
    expect(itemTransactions.transactionsFor(1, [])).toEqual([]);
  });

  it("Should return an empty array when given an item ID that doesn't exist", () => {
    expect(
      itemTransactions.transactionsFor(1, [
        { id: 2, movement: "in", quantity: 3 },
      ])
    ).toEqual([]);
  });

  it("Should return an array with the correct elements", () => {
    expect(itemTransactions.transactionsFor(101, [
      { id: 101, movement: "in", quantity: 3 },
      { id: 105, movement: "in", quantity: 10 },
      { id: 102, movement: "out", quantity: 17 },
      { id: 101, movement: "in", quantity: 12 },
      { id: 103, movement: "out", quantity: 20 },
      { id: 102, movement: "out", quantity: 15 },
      { id: 105, movement: "in", quantity: 25 },
      { id: 101, movement: "out", quantity: 18 },
      { id: 102, movement: "in", quantity: 22 },
      { id: 103, movement: "out", quantity: 15 },
    ])).toEqual([
      { id: 101, movement: "in", quantity: 3 },
      { id: 101, movement: "in", quantity: 12 },
      { id: 101, movement: "out", quantity: 18 },
    ]);
  });
});
