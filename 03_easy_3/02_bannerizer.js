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

function wrapInBox(text, maxBannerWidth = null) {
  const PADDING_TEXT = '| ';
  const WIDTH = maxBannerWidth === null ?
    text.length + (PADDING_TEXT.length * 2) :
    Math.max(maxBannerWidth, PADDING_TEXT.length * 2);

  text = genTruncatedText(text, PADDING_TEXT, WIDTH);

  return `${genTopBottom(WIDTH)}\n`
       + `${genEmptyLine(WIDTH, PADDING_TEXT)}\n`
       + `${genLine(text, PADDING_TEXT)}\n`
       + `${genEmptyLine(WIDTH, PADDING_TEXT)}\n`
       + `${genTopBottom(WIDTH)}`;
}

function genTruncatedText(text, paddingText = '| ', maxBannerWidth) {
  const ELLIPSIS = '...';
  if (text.length <= maxBannerWidth - (paddingText.length * 2)) return text;
  if (ELLIPSIS.length + 1 < maxBannerWidth - (paddingText.length * 2)) {
    return text.slice(
      0,
      maxBannerWidth - (paddingText.length * 2) - ELLIPSIS.length
    ) + ELLIPSIS;
  }
  return '';
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

function logInBox(text, maxBannerWidth = null) {
  console.log(wrapInBox(text, maxBannerWidth));
}

logInBox('To boldly go where no one has gone before.');
logInBox('To boldly go where no one has gone before.', 40);
logInBox('To boldly go where no one has gone before.', 4);
logInBox('To boldly go where no one has gone before.', 3);
logInBox('');