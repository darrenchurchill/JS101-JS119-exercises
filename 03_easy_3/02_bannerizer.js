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

function wrapInBox(text, maxBannerWidth = null, handleLongText = 'trunc') {
  const PADDING_TEXT = '| ';
  // TODO: reduce banner width if wrapped lines are all short enough to do so.
  const BANNER_WIDTH = maxBannerWidth === null ?
    text.length + (PADDING_TEXT.length * 2) :
    Math.max(maxBannerWidth, PADDING_TEXT.length * 2);

  let lines = [];

  if (handleLongText === 'trunc') {
    lines = [genTruncatedText(text, BANNER_WIDTH - (PADDING_TEXT.length * 2))];
  } else if (handleLongText === 'wrap') {
    lines = genWrappedLines(text, BANNER_WIDTH - (PADDING_TEXT.length * 2));
  }

  return `${genTopBottom(BANNER_WIDTH)}\n`
       + `${genEmptyLine(BANNER_WIDTH, PADDING_TEXT)}\n`
       + lines.reduce(
           (accum, line) => accum + genLine(line, PADDING_TEXT) + '\n',
           ''
         )
       + `${genEmptyLine(BANNER_WIDTH, PADDING_TEXT)}\n`
       + `${genTopBottom(BANNER_WIDTH)}`;
}

// eslint-disable-next-line max-lines-per-function
function genWrappedLines(text, maxTextWidth) {
  let result = [];
  let words = text.split(' ');
  let curLine = '';

  for (let word of words) {
    if (curLine.length !== 0) {
      if (curLine.length + 1 + word.length < maxTextWidth) {
        curLine += ` ${word}`;
      } else {
        result.push(curLine.padEnd(maxTextWidth, ' '));
        curLine = '';
      }
    }
    if (curLine.length === 0) {
      if (word.length < maxTextWidth) curLine += word;
      else return [' '.repeat(maxTextWidth)]; // wrapping fails if any word is too long for a line
    }
  }

  if (curLine.length > 0) result.push(curLine.padEnd(maxTextWidth, ' '));

  return result;
}

function genTruncatedText(text, maxTextWidth) {
  const ELLIPSIS = '...';
  if (text.length <= maxTextWidth) return text;
  if (ELLIPSIS.length + 1 < maxTextWidth) {
    return text.slice(0, maxTextWidth - ELLIPSIS.length) + ELLIPSIS;
  }
  return '';
}

function genLine(bodyText, paddingText) {
  return `${paddingText}${bodyText}${paddingText.split('').reverse().join('')}`;
}

function genEmptyLine(bannerWidth, paddingText = '| ') {
  return genLine(' '.repeat(bannerWidth - (paddingText.length * 2)), paddingText);
}

function genTopBottom(bannerWidth, paddingText = '+') {
  return genLine('-'.repeat(bannerWidth - (paddingText.length * 2)), paddingText);
}

function logInBox(text, maxBannerWidth = null, handleLongText = 'trunc') {
  console.log(wrapInBox(text, maxBannerWidth, handleLongText));
}

logInBox('To boldly go where no one has gone before.');
logInBox('To boldly go where no one has gone before.', 40);
logInBox('To boldly go where no one has gone before.', 20, 'wrap');
logInBox('To boldly go where no one has gone before.', 10, 'wrap');
logInBox('To boldly go where no one has gone before.', 3, 'wrap');
logInBox('To boldly go where no one has gone before.', 4);
logInBox('To boldly go where no one has gone before.', 3);
logInBox('');