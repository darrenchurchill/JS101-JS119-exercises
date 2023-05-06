/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 2
 *
 * Longest Sentence - Tests
 *
 * https://launchschool.com/exercises/a89915a7
 *
 */

const longestSentence = require("./08_longest_sentence");

describe("Determining a string's longest sentence", () => {
  it("Should return an empty string and 0 given an empty string", () => {
    expect(longestSentence.longestSentence("")).toBe(
      "\nThe longest sentence has 0 words."
    );
  });

  it("Should return the string and 1 given a string with one word", () => {
    expect(longestSentence.longestSentence("Hello")).toBe(
      "Hello\nThe longest sentence has 1 word."
    );
  });

  it("Should return the longest sentence and the number of words in that sentence", () => {
    let longText =
      "Four score and seven years ago our fathers brought forth on this " +
      "continent a new nation, conceived in liberty, and dedicated to the " +
      "proposition that all men are created equal. Now we are engaged in a " +
      "great civil war, testing whether that nation, or any nation so " +
      "conceived and so dedicated, can long endure. We are met on a great " +
      "battlefield of that war. We have come to dedicate a portion of that " +
      "field, as a final resting place for those who here gave their lives " +
      "that that nation might live. It is altogether fitting and proper that " +
      "we should do this.";

    let longerText =
      longText +
      "But, in a larger sense, we can not dedicate, we can not consecrate, " +
      "we can not hallow this ground. The brave men, living and dead, who " +
      "struggled here, have consecrated it, far above our poor power to add " +
      "or detract. The world will little note, nor long remember what we say " +
      "here but it can never forget what they did here. It is for us the " +
      "living, rather, to be dedicated here to the unfinished work which " +
      "they who fought here have thus far so nobly advanced. It is rather " +
      "for us to be here dedicated to the great task remaining before us -- " +
      "that from these honored dead we take increased devotion to that " +
      "cause for which they gave the last full measure of devotion -- that " +
      "we here highly resolve that these dead shall not have died in vain " +
      "-- that this nation, under God, shall have a new birth of freedom -- " +
      "and that government of the people, by the people, for the people, " +
      "shall not perish from the earth.";

    expect(longestSentence.longestSentence(longText)).toBe(
      "Four score and seven years ago our fathers brought forth on this " +
        "continent a new nation, conceived in liberty, and dedicated to the " +
        "proposition that all men are created equal.\n" +
        "The longest sentence has 30 words."
    );

    expect(longestSentence.longestSentence(longerText)).toBe(
      "It is rather for us to be here dedicated to the great task remaining " +
        "before us -- that from these honored dead we take increased devotion " +
        "to that cause for which they gave the last full measure of devotion " +
        "-- that we here highly resolve that these dead shall not have died " +
        "in vain -- that this nation, under God, shall have a new birth of " +
        "freedom -- and that government of the people, by the people, for the " +
        "people, shall not perish from the earth.\n" +
        "The longest sentence has 86 words."
    );

    expect(
      longestSentence.longestSentence(
        "Where do you think you're going? What's up, Doc?"
      )
    ).toBe(
      "Where do you think you're going?\nThe longest sentence has 6 words."
    );

    expect(
      longestSentence.longestSentence(
        "To be or not to be! Is that the question?"
      )
    ).toBe("To be or not to be!\nThe longest sentence has 6 words.");
  });
});
