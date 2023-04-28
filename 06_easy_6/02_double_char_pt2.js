/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Double Char (Part 2)
 *
 * https://launchschool.com/exercises/560de7d6
 *
 */


/**
 * Return true if the given character is a consonant, false otherwise.
 * @param {String} char the character to test
 * @returns {boolean} true if the character is a consonant, false otherwise
 */
function isConsonant(char) {
  char = char.toLowerCase();
  if (char < "a" || char > "z") {
    return false;
  }
  return (!"aeiou".includes(char));
}

/**
 * Given a string, return a new string with each consonant in the original
 * string repeated twice.
 * @param {String} string the string to repeat
 * @returns {String} the new string with each consonant repeated twice
 */
function doubleConsonants(string) {
  let result = [];

  for (let char of string) {
    if (isConsonant(char)) result.push(char, char);
    else result.push(char);
  }

  return result.join("");
}

module.exports = {
  isConsonant,
  doubleConsonants,
};
