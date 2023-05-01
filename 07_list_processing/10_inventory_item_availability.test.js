/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * Inventory Item Availability - Tests
 *
 * https://launchschool.com/exercises/fa70703d
 *
 */

const itemAvailability = require("./10_inventory_item_availability");

let transactions;

describe("Checking the availability of an item", () => {
  beforeEach(() => {
    transactions = [
      { id: 101, movement: "in", quantity: 5 },
      { id: 105, movement: "in", quantity: 10 },
      { id: 102, movement: "out", quantity: 17 },
      { id: 101, movement: "in", quantity: 12 },
      { id: 103, movement: "out", quantity: 20 },
      { id: 102, movement: "out", quantity: 15 },
      { id: 105, movement: "in", quantity: 25 },
      { id: 101, movement: "out", quantity: 18 },
      { id: 102, movement: "in", quantity: 22 },
      { id: 103, movement: "out", quantity: 15 },
    ];
  });

  it("Should return true if the item is available", () => {
    expect(itemAvailability.isItemAvailable(105, transactions)).toBe(true);
  });

  it("Should return false if the item is not available", () => {
    expect(itemAvailability.isItemAvailable(101, transactions)).toBe(false);
    expect(itemAvailability.isItemAvailable(103, transactions)).toBe(false);
  });
});
