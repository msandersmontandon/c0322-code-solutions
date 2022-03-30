/* exported truncate */

/** pseudocode for truncate
 * 1. make the function definition for truncate() with 2 paramethers: length and string;
 * 2. concatenate a string sliced from the string Paramether from the first index until the (length paramether)-nth index with an ellipsis string, then:
 * 3. return from the function the result of that expression.
 */

function truncate(length, string) {
  return string.slice(0, length) + '...';
}
