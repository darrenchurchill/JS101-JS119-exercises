/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 2
 *
 * Welcome Stranger
 *
 * https://launchschool.com/exercises/1bd6be82
 *
 */

function greetings(name, jobDescription) {
  return `Hello ${name.join(' ')}! `
          + `Nice to have a `
          + `${jobDescription.title} ${jobDescription.occupation} around`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);