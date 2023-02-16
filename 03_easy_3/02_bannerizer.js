/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 3
 *
 * Bannerizer
 *
 * https://launchschool.com/exercises/09fda3fd
 *
 */

function wrapInBox(text) {
  const PADDING_TEXT = '| ';
  const WIDTH = text.length + (PADDING_TEXT.length * 2);

  return genTopBottom(WIDTH) + '\n'
         + genEmptyLine(WIDTH, PADDING_TEXT) + '\n'
         + genLine(text, PADDING_TEXT) + '\n'
         + genEmptyLine(WIDTH, PADDING_TEXT) + '\n'
         + genTopBottom(WIDTH);
}

function genLine(bodyText, paddingText) {
  return `${paddingText}${bodyText}${paddingText.split('').reverse().join('')}`;
}

function genEmptyLine(width, paddingText = '| ') {
  return genLine(' '.repeat(width - (paddingText.length * 2)), paddingText);
}

function genTopBottom(width, paddingText = '+') {
  return genLine('-'.repeat(width - (paddingText.length * 2)), paddingText);
}

function logInBox(text) {
  console.log(wrapInBox(text));
}

logInBox('To boldly go where no one has gone before.');
logInBox('');