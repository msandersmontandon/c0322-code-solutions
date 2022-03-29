/* exported getWords */

/** pseudocode for getWords
 * 1. make the function definition for getWords() with 1 paramether: string;
 * 2. make and exception case for an empty string with a guard if statement;
 * 3. for the code block of the if statement, return an empty array;
 * 4. outside the guarded if statement codeblock, return an array of strings split from string at ' '.
 */

function getWords(string) {
  if (string === '') {
    return string.split('');
  }
  return string.split(' ');
}
