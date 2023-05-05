/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 1
 *
 * Stack Machine Interpretation - Tests
 *
 * https://launchschool.com/exercises/026e99f0
 *
 */

const stackMachineInterp = require("./04_stack_machine_interpretation");

describe("Stack Machine command interpretation", () => {
  it("Should initialize the register to 0", () => {
    expect(stackMachineInterp.minilang("PRINT")).toBe("0");
  });

  it("Should throw an error for unknown commands", () => {
    expect(() => stackMachineInterp.minilang("HELLO")).toThrow();
    expect(() => stackMachineInterp.minilang("MOD")).toThrow();
  });

  it("Should throw an error if the stack is empty when we need a stack value", () => {
    expect(() => stackMachineInterp.minilang("ADD")).toThrow();
    expect(() => stackMachineInterp.minilang("SUB")).toThrow();
    expect(() => stackMachineInterp.minilang("MULT")).toThrow();
    expect(() => stackMachineInterp.minilang("DIV")).toThrow();
    expect(() => stackMachineInterp.minilang("REMAINDER")).toThrow();
    expect(() => stackMachineInterp.minilang("POP")).toThrow();
  });

  it("Should return an empty string if there are no PRINT commands", () => {
    expect(stackMachineInterp.minilang("5 PUSH 3 MULT")).toBe("");
    expect(stackMachineInterp.minilang("6 PUSH")).toBe("");
  });

  it("Should return the register's value after a PRINT command", () => {
    expect(stackMachineInterp.minilang("5 PRINT")).toBe("5");
  });

  it("Should overwrite the register's value with a new value", () => {
    expect(stackMachineInterp.minilang("5 4 3 2 1 PRINT")).toBe("1");
  });

  it("Should PUSH the current register value onto the stack", () => {
    expect(stackMachineInterp.minilang("5 PUSH 3 POP PRINT")).toBe("5");
  });

  it("Should POP a number off the stack and assign it to the register", () => {
    expect(stackMachineInterp.minilang("5 PUSH 3 PUSH POP POP PRINT")).toBe(
      "5"
    );
  });

  describe("Should perform math operations", () => {
    it("Should perform addition", () => {
      expect(stackMachineInterp.minilang("5 PRINT PUSH 3 ADD PRINT")).toBe(
        "5\n8"
      );
      expect(stackMachineInterp.minilang("-3 PRINT PUSH 5 ADD PRINT")).toBe(
        "-3\n2"
      );
    });

    it("Should perform subtraction", () => {
      expect(stackMachineInterp.minilang("5 PRINT PUSH 3 SUB PRINT")).toBe(
        "5\n-2"
      );
      expect(stackMachineInterp.minilang("3 PRINT PUSH 5 SUB PRINT")).toBe(
        "3\n2"
      );
      expect(stackMachineInterp.minilang("-3 PRINT PUSH 5 SUB PRINT")).toBe(
        "-3\n8"
      );
    });

    it("Should perform multiplication", () => {
      expect(stackMachineInterp.minilang("5 PRINT PUSH 3 MULT PRINT")).toBe(
        "5\n15"
      );
      expect(stackMachineInterp.minilang("-3 PRINT PUSH 5 MULT PRINT")).toBe(
        "-3\n-15"
      );
    });

    it("Should perform integer division", () => {
      expect(stackMachineInterp.minilang("5 PRINT PUSH 3 DIV PRINT")).toBe(
        "5\n0"
      );
      expect(stackMachineInterp.minilang("-5 PRINT PUSH 3 DIV PRINT")).toBe(
        "-5\n0"
      );
      expect(stackMachineInterp.minilang("-3 PRINT PUSH 5 DIV PRINT")).toBe(
        "-3\n-1"
      );
    });

    it("Should calculate the remainder of integer division", () => {
      expect(
        stackMachineInterp.minilang("5 PRINT PUSH 3 REMAINDER PRINT")
      ).toBe("5\n3");
      expect(
        stackMachineInterp.minilang("5 PRINT PUSH -3 REMAINDER PRINT")
      ).toBe("5\n-3");
      expect(
        stackMachineInterp.minilang("-5 PRINT PUSH 3 REMAINDER PRINT")
      ).toBe("-5\n3");
      expect(
        stackMachineInterp.minilang("-5 PRINT PUSH -3 REMAINDER PRINT")
      ).toBe("-5\n-3");
    });
  });

  it("Should perform sequences of multiple different types of commands", () => {
    expect(stackMachineInterp.minilang("5 PRINT PUSH 3 PRINT ADD PRINT")).toBe(
      "5\n3\n8"
    );
    expect(
      stackMachineInterp.minilang(
        "3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT"
      )
    ).toBe("5\n10\n4\n7");
    expect(stackMachineInterp.minilang("3 PUSH PUSH 7 DIV MULT PRINT")).toBe(
      "6"
    );
    expect(
      stackMachineInterp.minilang("4 PUSH PUSH 7 REMAINDER MULT PRINT")
    ).toBe("12");
  });
});
