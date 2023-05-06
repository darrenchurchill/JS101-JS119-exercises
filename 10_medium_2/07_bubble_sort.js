/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 2
 *
 * Bubble Sort
 *
 * https://launchschool.com/exercises/b648e695
 *
 */


/**
 * Given an array, sort the array in-place using the bubble sort algorithm.
 * @param {Array} array the array to sort
 * @returns {Array} the sorted array
 */
function bubbleSort(array) {
  for (let _ = 0; _ < array.length; _++) {
    let swapped = false;

    for (let cur = 0; cur < array.length - 1; cur++) {
      let next = cur + 1;
      if (array[cur] > array[next]) {
        [array[cur], array[next]] = [array[next], array[cur]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return array;
}

module.exports = {
  bubbleSort,
};
