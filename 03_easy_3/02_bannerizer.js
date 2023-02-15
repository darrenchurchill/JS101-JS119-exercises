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

  return genHeaderFooter(WIDTH) + '\n'
         + genLine(' '.repeat(text.length), PADDING_TEXT) + '\n'
         + genLine(text, PADDING_TEXT) + '\n'
         + genLine(' '.repeat(text.length), PADDING_TEXT) + '\n'
         + genHeaderFooter(WIDTH);
}

function genLine(bodyText, paddingText) {
  return `${paddingText}${bodyText}${paddingText.split('').reverse().join('')}`;
}

function genHeaderFooter(width) {
  const PADDING_TEXT = '+-';
  return genLine('-'.repeat(width - (PADDING_TEXT.length * 2)), PADDING_TEXT);
}

function logInBox(text) {
  console.log(wrapInBox(text));
}

logInBox('To boldly go where no one has gone before.');
logInBox('');