/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 3
 *
 * Madlibs
 *
 * https://launchschool.com/exercises/fedd1cd6
 *
 */

const readline = require('readline-sync');

function promptUserInput() {
  let noun = readline.question('Enter a noun: ');
  let verb = readline.question('Enter a verb: ');
  let adjective = readline.question('Enter an adjective: ');
  let adverb = readline.question('Enter an adverb: ');
  return {
    noun: noun,
    verb: verb,
    adjective: adjective,
    adverb: adverb,
  };
}

function genMadlib() {
  let words = promptUserInput();
  return `\
Do you walk your ${words.adjective} ${words.noun} ${words.adverb}? That's hilarious!
The ${words.adjective} ${words.verb}s ${words.adverb} over the lazy ${words.noun}.
The ${words.noun} ${words.adverb} ${words.verb}s up ${words.adjective} Joe's turtle.`;
}

function displayMadlib() {
  console.log(genMadlib());
}

displayMadlib();