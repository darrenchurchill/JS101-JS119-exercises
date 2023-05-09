# Launch School Exercises: JS101-JS119 - Small Problems

## Debugging JS: Task List

<https://launchschool.com/exercises/ad7d2874>

We were asked to implement a task list and the following functionality:

- adding a new task
- completing a given number of existing tasks
- displaying the task list

We decided to keep things simple and model the tasks as strings. Completing a
task for us simply means deleting the string from the array of tasks.

Experimenting with our code reveals that it doesn't work exactly as we expected.
Find the problem and fix it.

```js
let todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    delete todos[0];
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {

  console.log(`ToDo list (${todos.length} tasks):`);
  console.log('---------------------');

  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();
```

### Solution

On line 17 inside `completeTasks`'s definition, the statement:

```js
delete todos[0];
```

doesn’t do what you might expect. Using `delete` like this on an `array` element
unsets the element, but doesn’t remove the index from the array. The element at
that index is now empty, and the array is a sparse array.

Because `todos`'s first element is always deleted, the code results in a `todos`
array with 1 empty item at index 0, and no way to remove items from the array
using the defined functions.

After executing the code above, the `todos` array will contain:

```js
[
  <1 empty item>, 'exercise', 'buy groceries', 'balance budget',
  'call plumber', 'feed fido', 'get gas',  'organize closet',
  'oil change', 'dentist', homework'
]
```

Instead of using `delete`, you should use the `Array.prototype.shift` method,
which removes and returns the element at index 0.
