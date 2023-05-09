# Launch School Exercises: JS101-JS119 - Small Problems

## Debugging JS: Neutralizer

<https://launchschool.com/exercises/5d853595>

We wrote a `neutralize` function that removes negative words from sentences.
However, it fails to remove all of them. What does happen? How would you fix
this problem?

```js
function neutralize(sentence) {
  let words = sentence.split(" ");

  words.forEach(word => {
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words.splice(index, 1);
    }
  });
  return words.join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
```

### Solution

The code fails to remove `"boring"` from the string. The problem is in
`neutralize`'s `forEach` callback. The callback function removes a `word` from
the `words` array if its a negative word. This modifies the array’s while
`forEach` is still iterating over the array, which is not generally what you
want to do.

In this case, `forEach`'s internal index counter continues to increment by one
each iteration, and its stop point is based on the array’s original length.
Therefore, `neutralize` will fail to remove the 2nd of 2 negative words in a
row.

You can fix the problem by using `filter` instead of `forEach`:

```js
...

words = words.filter((word) => !isNegative(word));

...
```
