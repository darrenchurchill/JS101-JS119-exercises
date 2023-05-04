/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * String and Text Processing
 *
 * Search Word (Part 2) - Tests
 *
 * https://launchschool.com/exercises/c5f72b07
 *
 */

const searchWord = require("./10_search_word_pt2");

describe("Highlighting the occurrences of a `word` within a `text` string", () => {
  it("Should return `text` when the `word` does not appear in `text`", () => {
    expect(searchWord.replaceWord("hello", "")).toEqual("");
    expect(searchWord.replaceWord("hello", "goodbye")).toEqual("goodbye");
  });

  it("Should return `text` with `word`'s occurrences highlighted", () => {
    // expect(searchWord.replaceWord("hello", "hello world")).toEqual(
    //   "**HELLO** world"
    // );
    expect(searchWord.replaceWord("hello", "hello world hello")).toEqual(
      "**HELLO** world **HELLO**"
    );
  });

  it("Should not count partial matches", () => {
    expect(searchWord.replaceWord("hello", "hellohello")).toEqual("hellohello");
    expect(searchWord.replaceWord("hello", "hellohellohello")).toEqual(
      "hellohellohello"
    );

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

    expect(searchWord.replaceWord("qui", text)).toEqual(
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem " +
        "accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab " +
        "illo inventore veritatis et quasi architecto beatae vitae dicta sunt " +
        "explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut " +
        "odit aut fugit, sed quia consequuntur magni dolores eos **QUI** ratione " +
        "voluptatem sequi nesciunt. Neque porro quisquam est, **QUI** dolorem ipsum " +
        "quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam " +
        "eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat " +
        "voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam " +
        "corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? " +
        "Quis autem vel eum iure reprehenderit **QUI** in ea voluptate velit esse quam " +
        "nihil molestiae consequatur, vel illum **QUI** dolorem eum fugiat quo voluptas " +
        "nulla pariatur?"
    );
  });

  it("Should ignore case", () => {
    expect(searchWord.replaceWord("hello", "HELLO")).toEqual("**HELLO**");
    expect(searchWord.replaceWord("HELLO", "hello")).toEqual("**HELLO**");
  });

  it("Should consider punctuation within the word", () => {
    // expect(searchWord.replaceWord("hello!", "hello!")).toEqual("**HELLO!**");
    expect(searchWord.replaceWord("hello!", "hello! hello!")).toEqual(
      "**HELLO!** **HELLO!**"
    );
    expect(searchWord.replaceWord("hello!", "hello hello!")).toEqual(
      "hello **HELLO!**"
    );
    expect(searchWord.replaceWord("hello!", "hello hello")).toEqual(
      "hello hello"
    );
    expect(searchWord.replaceWord("don't", "don't")).toEqual("**DON'T**");
  });

  it("Should not consider punctuation outside of the word", () => {
    expect(searchWord.replaceWord("hello", "hello?")).toEqual("**HELLO**?");
    expect(searchWord.replaceWord("hello!", "hello!?")).toEqual("**HELLO!**?");
    expect(searchWord.replaceWord("hello!", "!hello!?")).toEqual(
      "!**HELLO!**?"
    );
    expect(searchWord.replaceWord("hello", "hello? hello!")).toEqual(
      "**HELLO**? **HELLO**!"
    );
    expect(searchWord.replaceWord("hello!", "?hello! ?hello!")).toEqual(
      "?**HELLO!** ?**HELLO!**"
    );
  });
});
