# Launch School Exercises: JS101-JS119 - Small Problems

## Debugging JS: Grade Analysis

<https://launchschool.com/exercises/860af5ab>

Professor Graham wrote some simple code to help him determine the average and
median scores on each of his quarterly exams, but some of the test cases are
failing. Figure out why, and write the code necessary for the program to work as
expected.

```js
function average(nums) {
  let sum = nums.reduce((total, num) => total + num);

  return sum / nums.length;
}

function median(nums) {
  nums.sort();

  let median;
  let length = nums.length;
  if (length % 2 === 0) {
    median = average([nums[(length / 2) - 1], nums[length / 2]]);
  } else {
    median = nums[Math.floor(length / 2)];
  }

  return median;
}

// Tests

let quarter1ExamScores = [89, 72, 100, 93, 64, 97, 82, 87, 90, 94];
let quarter2ExamScores = [76, 91, 89, 90, 91, 67, 99, 82, 91, 87];
let quarter3ExamScores = [99, 91, 88, 72, 76, 64, 94, 79, 86, 88];
let quarter4ExamScores = [100, 94, 73, 88, 82, 91, 97, 99, 80, 84];

// should all log 'true':
console.log(average(quarter1ExamScores) === 86.8);
console.log(average(quarter2ExamScores) === 86.3);
console.log(average(quarter3ExamScores) === 83.7);
console.log(average(quarter4ExamScores) === 88.8);

console.log(median(quarter1ExamScores) === 89.5);
console.log(median(quarter2ExamScores) === 89.5);
console.log(median(quarter3ExamScores) === 87);
console.log(median(quarter4ExamScores) === 89.5);
```

### Solution

In order to find a list of numbers’ median value, you need to put the values in
sorted order. The `median` function defined above uses `Array.prototype.sort()`
to sort the `nums` parameter’s values, but it calls the method without providing
a `compareFn` callback argument.

By default, if `sort()` does not receive an argument, it will convert each of
the array’s elements to a string and sort them by their Unicode point value. For
an array of numbers, this means `100`, will come before `90`, which is not what
you want.

The typical callback to sort an array in ascending order is `(a, b) => a - b`,
which returns a value according to `sort`'s `compareFn` specification. Providing
this arrow function as the argument to `sort` on line 8 will sort the `nums`
array in ascending order. The remaining code in `median()` can then find the
median value.
