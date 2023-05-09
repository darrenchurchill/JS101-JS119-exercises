# Launch School Exercises: JS101-JS119 - Small Problems

## Debugging JS: Reserved Keywords

<https://launchschool.com/exercises/f319b8bc>

We have been asked to implement a function that determines whether or not a
given word is a reserved keyword. We wrote the isReserved function below along
with some test cases, but we aren't seeing the expected result. Why not? Fix the
code so that it behaves as intended.

```js
const RESERVED_KEYWORDS = [
  "break", "case", "catch", "class", "const", "continue", "debugger", "default",
  "delete", "do", "else", "enum", "export", "extends", "finally", "for",
  "function", "if", "implements", "import", "in", "instanceof", "interface",
  "let", "new", "package", "private", "protected", "public", "return", "static",
  "super", "switch", "this", "throw", "try", "typeof", "var", "void", "while",
  "with", "yield",
];

function isReserved(name) {
  RESERVED_KEYWORDS.forEach((reserved) => {
    if (name === reserved) {
      return true;
    }
  });

  return false;
}

console.log(isReserved("monkey")); // false
console.log(isReserved("patch")); // false
console.log(isReserved("switch")); // should be: true
```

### Solution

On line 11, the `return true` statement returns `true` from the `forEach`
callback, not from the outer `isReserved` function.

The `isReserved` function intends to return `true` if a `name` argument is found
within the global `RESERVED_KEYWORDS` constant. You could accomplish this by
using the `Array.prototype.includes` method, returning its return value from
`isReserved`:

```js
const RESERVED_KEYWORDS = [
  "break", "case", "catch", "class", "const", "continue", "debugger", "default",
  "delete", "do", "else", "enum", "export", "extends", "finally", "for",
  "function", "if", "implements", "import", "in", "instanceof", "interface",
  "let", "new", "package", "private", "protected", "public", "return", "static",
  "super", "switch", "this", "throw", "try", "typeof", "var", "void", "while",
  "with", "yield",
];

function isReserved(name) {
  return RESERVED_KEYWORDS.includes(reserved);
}

console.log(isReserved("monkey")); // false
console.log(isReserved("patch")); // false
console.log(isReserved("switch")); // should be: true
```
