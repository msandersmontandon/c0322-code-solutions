/* exported lastChars */

/** pseudocode for lastChars
 * 1. make the function definition for lastChars() with 2 paramethers: length and string;
 * 2. return from the function a string sliced from (length paramether) indexes prior to and till the end index of the string paramether.
 */

function lastChars(length, string) {
  return string.slice(-length);
}
