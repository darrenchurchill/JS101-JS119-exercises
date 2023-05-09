# Launch School Exercises: JS101-JS119 - Small Problems

## Debugging JS: Word Ladder

<https://launchschool.com/exercises/681d8f05>

Gemma and some friends are working on a complex program to generate word
ladders, transforming one word into another word one character at a time. The
smallest of her tasks is to print the resulting ladder to the screen.

A "ladder" is simply an array of word strings; Gemma decides to transform this
array into a single string where each word within the string is separated by a
hyphen (`'-'`). For example, the array `['pig', 'pie', 'lie', 'lit', 'let']`
should be printed as the string `'pig-pie-lie-lit-let'`.

Upon first glance, Gemma's code below looks like it should work. But it throws a
`TypeError`, saying: `Cannot read property 'forEach' of undefined`. Why is that?

```js
let ladder = ''

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail
```

### Solution

The interpreter throws a `TypeError` because it assumes line 3's code is a
continuation of line 1's statement. This happens because line 1 isn't terminated
with a semicolon. The interpreter tries to infer where semicolons should be, but
it guesses incorrectly in this instance.

The rest of the snippets' statements are also missing semicolons, but the
interpreter handles those correctly if line 1 is terminated with a semicolon.
