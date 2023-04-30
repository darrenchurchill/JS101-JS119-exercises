/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Matching Parentheses? - Tests
 *
 * https://launchschool.com/exercises/541d0500
 *
 */

const matching = require("./10_matching_parentheses");

describe ("Checking for balanced parentheses", () => {
  it("Should return true when given an empty string", () => {
    expect(matching.isBalanced("")).toBe(true);
  });

  it("Should return true when given a string with no parentheses", () => {
    expect(matching.isBalanced("abc")).toBe(true);
  });

  it("Should return true when given a string with balanced parentheses", () => {
    expect(matching.isBalanced("()")).toBe(true);
    expect(matching.isBalanced("(abc)")).toBe(true);
    expect(matching.isBalanced("(a(bc))")).toBe(true);
    expect(matching.isBalanced("(a(b)c)")).toBe(true);
    expect(matching.isBalanced("((a(bc)))")).toBe(true);
  });

  it("Should return false when given a string with unbalanced parentheses", () => {
    expect(matching.isBalanced("(")).toBe(false);
    expect(matching.isBalanced(")")).toBe(false);
    expect(matching.isBalanced(")(")).toBe(false);
    expect(matching.isBalanced("abc)")).toBe(false);
    expect(matching.isBalanced("(abc")).toBe(false);
    expect(matching.isBalanced("(a(bc)")).toBe(false);
    expect(matching.isBalanced("a(bc))")).toBe(false);
    expect(matching.isBalanced("((a(bc))")).toBe(false);
    expect(matching.isBalanced("((a(bc)))(")).toBe(false);
    expect(matching.isBalanced("((a(bc)))(")).toBe(false);
    expect(matching.isBalanced("a(b(c(d)e)))")).toBe(false);
    expect(matching.isBalanced("((()())")).toBe(false);
  });
});
