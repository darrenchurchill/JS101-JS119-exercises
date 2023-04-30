/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Name Swapping
 *
 * https://launchschool.com/exercises/815cc58f
 *
 */


/**
 * Given a string containing a name in the format of `"firstName [middleName(s)]
 * lastName"`, return a string containing the name in the format of `"lastName,
 * [middleName(s)] firstName"`.
 * @param {String} name a name in the format of `"firstName [middleName(s)]
 * lastName"`
 * @returns {String} the name in the format of `"lastName, firstName
 * [middleName(s)]"`
 */
function swapName(name) {
  let split = name.trim().split(" ").filter((name) => name !== "");
  if (split.length <= 1) return split.join(" ");

  return `${split.at(-1)}, ${split.slice(0, -1).join(" ")}`;
}

module.exports = {
  swapName,
};
