/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * Inventory Item Availability
 *
 * https://launchschool.com/exercises/fa70703d
 *
 */

const itemTransactions = require("./09_inventory_item_transactions");

/**
 * @typedef {Object} Transaction
 * @property {Number} id
 * @property {String} movement
 * @property {Number} quantity
 */

/**
 * Given an item ID and an array of `Transaction`s, return `true` if the item is
 * available, `false` otherwise. An item is available if the sum of `quantity`'s
 * for that item's transactions is greater than 0. Transactions where `movement`
 * is "in" are positive; transactions where `movement` is "out" are negative.
 * @param {Number} itemID the item ID to check availability for
 * @param {Array<Transaction>} transactions the array of `Transaction`s
 * @returns {Boolean} `true` if the item is available, `false` otherwise
 */
function isItemAvailable(itemID, transactions) {
  return (
    itemTransactions
      .transactionsFor(itemID, transactions)
      .reduce((totalQuantity, transaction) => {
        if (transaction.movement === "in") {
          return totalQuantity + transaction.quantity;
        }
        return totalQuantity - transaction.quantity;
      }, 0) > 0
  );
}

module.exports = {
  isItemAvailable,
};
