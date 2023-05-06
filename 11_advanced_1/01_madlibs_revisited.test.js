/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Advanced 1
 *
 * Madlibs Revisited - Tests
 *
 * https://launchschool.com/exercises/55f51106
 *
 */

const madlibs = require("./01_madlibs_revisited");

describe("Filling out a Madlib from a template string", () => {
  it("Should return an empty string if the template string is empty", () => {
    expect(madlibs.madlibs("")).toBe("");
  });

  it("Should return the template string if there are no placeholders", () => {
    expect(madlibs.madlibs("Hello World!")).toBe("Hello World!");
  });

  it("Should return a string with all the placeholders filled in", () => {
    let madlib = madlibs.madlibs("The {adjective} {noun} {verb} {adverb}.");
    console.log(madlib);
    expect(madlib).toMatch(/The \w+ \w+ \w+ \w+\./);
  });
});
