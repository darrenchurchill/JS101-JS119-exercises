# Launch School Exercises: JS101-JS119 - Small Problems

## Debugging JS: Range

<https://launchschool.com/exercises/ca783829>

We are assigned the task to implement a range function that returns an array of
integers beginning and ending with specified start and end numbers. When only a
single argument is provided, that argument should be used as the ending number
and the starting number should be 0.

Check our code below. Why do the example invocations fail with an error saying
Maximum call stack size exceeded? Can you fix the code, so it runs without error
and satisfies the requirements?

```js
function range(start, end = -1) {
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range(end) {
  return range(0, end);
}

// Examples

console.log(range(10, 20));
console.log(range(5));
```

### Solution

You cannot overload function definitions in JavaScript like you can in some
other languages. The second definition of `range` from lines 11-13 overrides the
first definition, because it comes later in the file.

In `range`'s second definition, it recursively calls itself, not the first
`range` function above it. When `range` is invoked on line 17 with the
arguments, `10` and `20`, the recursive calls continue until the stack size is
exceeded.

To achieve the desired outcome, where you can call range with 1 or 2 arguments,
you could remove the second `range` definition, and modify the first one as:

```js
function range(start, end = -1) {
  if (end === -1) {
    end = start;
    start = 0;
  }
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5));
```
