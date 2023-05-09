# Launch School Exercises: JS101-JS119 - Small Problems

## Debugging JS: Random Recipe Generator

<https://launchschool.com/exercises/bb8f2935>

One bored and hungry evening we decided to randomly generate recipes. We can't
wait to see the first suggestions, but JavaScript raises a TypeError, telling us
that dishName.join is not a function. What is wrong?

```js
// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  let elements = array.slice();
  let randomElements = [];

  while (n > 0 && elements.length > 0) {
    let randomIndex = Math.floor(Math.random() * elements.length);
    let randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

let ingredients = [
  'rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab', 'spinach',
  'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'
];

let spices = [
  'peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger', 'poppy seed',
  'cumin'
];

let extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

let adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
let firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
let secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

let dishName = random(adjective) + random(firstNoun) + random(secondNoun);
let dish = random(ingredients, 3) + random(spices, 2) + random(extras, 1);

console.log('How about: ' + dishName.join(' '));
console.log('You need: ' + dish.join(', '));
```

### Solution

Near the end of this snippet, on line 41:

```js
let dishName = random(adjective) + random(firstNoun) + random(secondNoun);
```

Each call to `random` returns an `array` object, but in JavaScript the `+`
operator does **not** perform array concatenation like is does in some other
languages. The 3 arrays on this line are coerced into `strings` and then
concatenated together. Therefore, on line 44, the `string` value `dishName` now
references does not have a `join` method.

The same error would also be encountered on line 45. `dish`'s string value will
also not have a `join` method.

A possible solution would be to use the `Array.prototype.concat` method to
concatenate the 3 arrays in each statement.

```js
...

let dishName = random(adjective).concat(firstNoun).concat(secondNoun);
let dish = random(ingredients, 3).concat(spices, 2).concat(extras, 1);

...
```
