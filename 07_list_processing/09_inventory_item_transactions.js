/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * Inventory Item Transactions
 *
 * https://launchschool.com/exercises/1e53cc84
 *
 */

/**
 * @typedef {Object} Transaction
 * @property {Number} id
 * @property {String} movement
 * @property {Number} quantity
 */

/**
 * Given an item ID and an array of `Transaction`s, return an array containing
 * only the transactions for the given item ID.
 * @param {Number} itemID the item ID to filter transactions by
 * @param {Array<Transaction>} transactions the array of `Transaction`s
 * @returns {Array<Transaction>} the transactions for the given item ID
 */
function transactionsFor(itemID, transactions) {
  return transactions.filter((transaction) => transaction.id === itemID);
}

module.exports = {
  transactionsFor,
};
