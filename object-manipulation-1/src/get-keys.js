/* exported getKeys */

/** pseudocode for getKeys
 * 1. make the function definition for getKeys() with 1 paramether: object;
 * 2.declare a new variable keys, and assign an empty array to it;
 * 3. using a for in loop, iterate through the key properties in the object paramether;
 * 4. append the property name for the current key into the end of the keys array;
 * 5. after the end of the for in loop, return from the functinon the value of the variable keys.
 */

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
