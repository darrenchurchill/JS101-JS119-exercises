/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Interpretive Problem Solving
 *
 * Spelling Blocks - Tests
 *
 * https://launchschool.com/exercises/d219156d
 *
 */

const spellingBlocks = require("./03_spelling_blocks");

describe("Checking if a word can be spelled using the given blocks", () => {
  it("Should return true if the string is empty", () => {
    expect(spellingBlocks.isBlockWord("")).toBe(true);
  });

  it("Should return false if the spelling blocks are empty", () => {
    expect(spellingBlocks.isBlockWord("jest", [])).toBe(false);
  });

  it("Should return true if the string can be spelled using the blocks", () => {
    expect(spellingBlocks.isBlockWord("BATCH")).toBe(true);
    expect(spellingBlocks.isBlockWord("BUTCH")).toBe(false);
    expect(spellingBlocks.isBlockWord("jest")).toBe(true);
  });
});
