/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * String and Text Processing
 *
 * Search Word (Part 1) - Tests
 *
 * https://launchschool.com/exercises/5a7a40b6
 *
 */

const searchWord = require("./09_search_word_pt1");

describe("Counting the number of times a word appears within a string", () => {
  it("Should return 0 when the word does not appear in the string", () => {
    expect(searchWord.searchWord("hello", "")).toBe(0);
    expect(searchWord.searchWord("hello", "goodbye")).toBe(0);
  });

  it("Should return the number of times the word appears in the string", () => {
    expect(searchWord.searchWord("hello", "hello world")).toBe(1);
    expect(searchWord.searchWord("hello", "hello world hello")).toBe(2);
  });

  it("Should not count partial matches", () => {
    expect(searchWord.searchWord("hello", "hellohello")).toBe(0);
    expect(searchWord.searchWord("hello", "hellohellohello")).toBe(0);

    const text =
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem " +
      "accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab " +
      "illo inventore veritatis et quasi architecto beatae vitae dicta sunt " +
      "explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut " +
      "odit aut fugit, sed quia consequuntur magni dolores eos qui ratione " +
      "voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum " +
      "quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam " +
      "eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat " +
      "voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam " +
      "corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? " +
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam " +
      "nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas " +
      "nulla pariatur?";

    expect(searchWord.searchWord("qui", text)).toBe(4);
  });

  it("Should ignore case", () => {
    expect(searchWord.searchWord("hello", "HELLO")).toBe(1);
    expect(searchWord.searchWord("HELLO", "hello")).toBe(1);
  });

  it("Should consider punctuation within the word", () => {
    expect(searchWord.searchWord("hello!", "hello!")).toBe(1);
    expect(searchWord.searchWord("hello!", "hello! hello!")).toBe(2);
    expect(searchWord.searchWord("hello!", "hello hello!")).toBe(1);
    expect(searchWord.searchWord("hello!", "hello hello")).toBe(0);
    expect(searchWord.searchWord("don't", "don't")).toBe(1);
  });

  it("Should not consider punctuation outside of the word", () => {
    expect(searchWord.searchWord("hello", "hello?")).toBe(1);
    expect(searchWord.searchWord("hello!", "hello!?")).toBe(1);
    expect(searchWord.searchWord("hello!", "!hello!?")).toBe(1);
    expect(searchWord.searchWord("hello", "hello? hello!")).toBe(2);
    expect(searchWord.searchWord("hello!", "?hello! ?hello!")).toBe(2);
  });
});
