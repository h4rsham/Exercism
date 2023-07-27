// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.
//
// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./door-policy.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Good luck with that door policy!

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */

// Task 1
export function frontDoorResponse(line) {
  // make the whole line into lowercase and then slice the first letter of the line and capitalise it, then add the rest of the line to it
  let lineLower = line.toLowerCase();
  let capitalisedLine = lineLower.charAt(0).toUpperCase() + lineLower.slice(1);
  let capitalisedLetter = line.charAt(0).toUpperCase();
  return capitalisedLetter;
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */

// Task 2
export function frontDoorPassword(word) {

  // capitalize the first letter of the word
  let wordLower = word.toLowerCase();
  let capitalizedWord = wordLower.charAt(0).toUpperCase() + wordLower.slice(1);
  return capitalizedWord;
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */

// Task 3
export function backDoorResponse(line) {
  // // loop through the line from the back and find the first letter that is not a space
  // for (let i = line.length - 1; i >= 0; i--) {
  //   if (line[i] !== " ") {
  //     return line[i];
  //   }
  // }
  let trimmedLine = line.trim(); // trim the line to remove the spaces at the end
  return trimmedLine.charAt(trimmedLine.length - 1); // return the last letter of the trimmed line

  // let lastLetter = line.charAt(line.length - 1);
  // return lastLetter
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */

// Task 4
export function backDoorPassword(word) {
  // make the whole word lowercase and then slice the first letter of the word and capitalise it, then add the rest of the word to it
  let wordLower = word.toLowerCase();
  let capitalisedWord = wordLower.charAt(0).toUpperCase() + wordLower.slice(1);
  return capitalisedWord + ', please';
}
