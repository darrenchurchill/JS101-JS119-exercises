/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 3
 *
 * Grade Book
 *
 * https://launchschool.com/exercises/257a77fb
 *
 */

function getGrade(grade1, grade2, grade3) {
  let avg = (grade1 + grade2 + grade3) / 3;

  if (90 <= avg && avg <= 100) return 'A';
  if (80 <= avg && avg < 90) return 'B';
  if (70 <= avg && avg < 80) return 'C';
  if (60 <= avg && avg < 70) return 'D';
  else return 'F';
}

console.log(getGrade(95, 90, 93) === 'A');
console.log(getGrade(50, 50, 95) === 'D');