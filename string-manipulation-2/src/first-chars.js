/* exported firstChars */

/** pseudocode for firstChars
 * 1. make the function definition for firstChars() with 2 paramethers: length and string;
 * 2. return from the function a string sliced from the first index to the (length paramether)-nth index of the string paramether.
 */

function firstChars(length, string) {
  return string.slice(0, length);
}
