/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Name Swapping - Tests
 *
 * https://launchschool.com/exercises/815cc58f
 *
 */

const swapName = require("./05_name_swapping");

describe("Swapping a first and last name", () => {
  it("Should return an empty string when given an empty string", () => {
    expect(swapName.swapName("")).toBe("");
  });

  it("Should return a single name when given a single name", () => {
    expect(swapName.swapName("Darren")).toBe("Darren");
  });

  it("Should return a single name when given a single name with a trailing space", () => {
    expect(swapName.swapName("Darren ")).toBe("Darren");
  });

  it("Should return a single name when given a single name with a leading space", () => {
    expect(swapName.swapName(" Darren")).toBe("Darren");
  });

  it("Should return a single name when given a single name with leading and trailing spaces", () => {
    expect(swapName.swapName(" Darren ")).toBe("Darren");
  });

  it("Should return a single name when given a single name with multiple spaces", () => {
    expect(swapName.swapName("  Darren  ")).toBe("Darren");
    expect(swapName.swapName("   Darren   ")).toBe("Darren");
  });

  it("Should return a lastName, firstName when given a firstName lastName", () => {
    expect(swapName.swapName("Darren Churchill")).toBe("Churchill, Darren");
  });

  it("Should return a lastName, firstName when given a firstName lastName with a trailing space", () => {
    expect(swapName.swapName("Darren Churchill ")).toBe("Churchill, Darren");
  });

  it("Should return a lastName, firstName when given a firstName lastName with a leading space", () => {
    expect(swapName.swapName(" Darren Churchill")).toBe("Churchill, Darren");
  });

  it("Should return a lastName, firstName when given a firstName lastName with leading and trailing spaces", () => {
    expect(swapName.swapName(" Darren Churchill ")).toBe("Churchill, Darren");
  });

  it("Should return a lastName, firstName when given a firstName lastName with multiple spaces", () => {
    expect(swapName.swapName("  Darren Churchill  ")).toBe("Churchill, Darren");
    expect(swapName.swapName(" Darren  Churchill  ")).toBe("Churchill, Darren");
    expect(swapName.swapName("  Darren  Churchill  ")).toBe(
      "Churchill, Darren"
    );
    expect(swapName.swapName("  Darren  Churchill")).toBe("Churchill, Darren");
    expect(swapName.swapName("  Darren    Churchill")).toBe(
      "Churchill, Darren"
    );
    expect(swapName.swapName("  Darren Churchill   ")).toBe(
      "Churchill, Darren"
    );
  });
});

describe("Swapping a first, middle name(s), and last name", () => {
  it("Should return a lastName, firstName middleName(s) when given a firstName middleName(s) lastName", () => {
    expect(swapName.swapName("Karl Oskar Ragvals")).toBe("Ragvals, Karl Oskar");
    expect(swapName.swapName("Karl Oskar Henriksson Ragvals")).toBe(
      "Ragvals, Karl Oskar Henriksson"
    );
  });

  it("Should return a lastName, firstName middleName(s) when given a firstName middleName(s) lastName with a additional space(s)", () => {
    expect(swapName.swapName("Karl  Oskar  Ragvals")).toBe(
      "Ragvals, Karl Oskar"
    );
    expect(swapName.swapName("Karl  Oskar  Henriksson  Ragvals")).toBe(
      "Ragvals, Karl Oskar Henriksson"
    );
    expect(swapName.swapName("Karl Oskar  Henriksson  Ragvals")).toBe(
      "Ragvals, Karl Oskar Henriksson"
    );
    expect(swapName.swapName("Karl  Oskar Henriksson  Ragvals")).toBe(
      "Ragvals, Karl Oskar Henriksson"
    );
  });
});
