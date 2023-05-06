/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Advanced 1
 *
 * Madlibs Revisited
 *
 * https://launchschool.com/exercises/55f51106
 *
 */


/**
 * Given a word type placeholder, return a random word of that type. Word type
 * placeholders are any of the strings "adjective", "noun", "verb", or "adverb"
 * surrounded by curly braces.
 * @param {String} wordTypePlaceHolder the word type placeholder to choose a
 * random word for
 * @returns {String} a random word of the given type
 */
function chooseRandomWord(wordTypePlaceHolder) {
  const WORD_CHOICES = {
    adjective: ["quick", "lazy", "sleepy", "noisy", "hungry"],
    noun: ["fox", "dog", "head", "leg", "tail", "cat"],
    verb: ["jumps", "lifts", "bites", "licks", "pats"],
    adverb: ["easily", "lazily", "noisily", "excitedly"],
  };

  let type = wordTypePlaceHolder.slice(1, -1);
  let index = Math.floor(Math.random() * WORD_CHOICES[type].length);
  return WORD_CHOICES[type][index];
}

/**
 * Given a madlib template string containing placeholders for one or more word
 * type, return a string representing the randomly filled in madlib.
 *
 * If no callback function is provided, the default callback function will
 * fill any placeholders of the type "adjective", "noun", "verb", or "adverb".
 *
 * Placeholders are denoted as any string surrounded by curly braces. For
 * example, the string `"The {adjective} brown {noun} {adverb} {verb} the
 * {adjective} yellow {noun}, who {adverb} {verb} his {noun} and looks around."`
 *
 * @param {String} template the madlib template string
 * @param {Function} replacerCb a callback function for
 * `String.prototype.replace()` that takes a word type placeholder `match`
 * argument and returns a random word of that type
 * @returns {String} the randomly filled in madlib string
 */
function madlibs(template, replacerCb = chooseRandomWord) {
  return template.replace(/{[^{}]+}/g, replacerCb);
}

module.exports = {
  madlibs,
};
