/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 3
 *
 * Right Triangles
 *
 * https://launchschool.com/exercises/ff51259d
 *
 */

function triangle(sideLength) {
  const SIDE_CHAR = '*';
  let result = '';

  for (let i = 1; i <= sideLength; i++) {
    result += `${SIDE_CHAR.repeat(i).padStart(sideLength, ' ')}`;
    if (i < sideLength) result += '\n';
  }

  return result;
}

const TRIANGLE_5 = `\
    *
   **
  ***
 ****
*****`;

const TRIANGLE_9 = `\
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********`;

console.log(triangle(5) === TRIANGLE_5);
console.log(triangle(9) === TRIANGLE_9);