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

// eslint-disable-next-line max-lines-per-function
function wrapInBox(text, maxBannerWidth = null, handleLongText = 'trunc') {
  const PADDING_TEXT = '| ';
  let bannerWidth = maxBannerWidth === null ?
    text.length + (PADDING_TEXT.length * 2) :
    Math.max(maxBannerWidth, PADDING_TEXT.length * 2);
  let maxTextWidth = bannerWidth - (PADDING_TEXT.length * 2);

  let lines = [];

  if (handleLongText === 'trunc') {
    lines = [genTruncatedText(text, maxTextWidth)];
  } else if (handleLongText === 'wrap') {
    lines = genWrappedLines(text, maxTextWidth);
    maxTextWidth = Math.max(...lines.map((line) => line.length));
    bannerWidth = maxTextWidth + (PADDING_TEXT.length * 2);
  }

  return `${genTopBottom(bannerWidth)}\n`
       + `${genEmptyLine(bannerWidth, PADDING_TEXT)}\n`
       + lines.reduce((accum, line) => {
           return accum + genLine(line, PADDING_TEXT, maxTextWidth) + '\n';
         }, '')
       + `${genEmptyLine(bannerWidth, PADDING_TEXT)}\n`
       + `${genTopBottom(bannerWidth)}`;
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
        result.push(curLine);
        curLine = '';
      }
    }
    if (curLine.length === 0) {
      if (word.length < maxTextWidth) curLine += word;
      else return ['']; // wrapping fails if any word is too long for a line
    }
  }

  if (curLine.length > 0) result.push(curLine);

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

function genLine(bodyText, paddingText, textWidth = bodyText.length) {
  return `${paddingText}${bodyText.padEnd(textWidth, ' ')}${paddingText.split('').reverse().join('')}`;
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