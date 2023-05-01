/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * Grocery List
 *
 * https://launchschool.com/exercises/a8fc112c
 *
 */


/**
 * Given an array of 2-element arrays, each containing a `string` fruit name
 * and a `number` quantity, return an array of `string` fruit names, where
 * each fruit name appears the number of times specified by its quantity.
 * @param {Array<Array<String|Number>>} groceryList the grocery list of fruits
 * @returns {Array<String>} the grocery list of fruits, expanded
 */
function buyFruit(groceryList) {
  return groceryList
    .map(([fruit, quantity]) => Array(quantity).fill(fruit))
    .flat();
}

module.exports = {
  buyFruit,
};
