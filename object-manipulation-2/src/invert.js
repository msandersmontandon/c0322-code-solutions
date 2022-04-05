/* exported invert */

/** pseudocode for invert
 * 1. make the function definition for invert() wit 1 paramether: source;
 * 2. declare a variable invertedObject and assign an empty object literal to it;
 * 3. use a for in loop to iterate through the key property names of the source paramether;
 * 4. assign the inverted pair value:property of the current key of the source paramether to the invertedObject object;
 * 5. after the loop, return from the function the value of the invertedObject variable.
 */

function invert(source) {
  var invertedObject = {};
  for (var key in source) {
    invertedObject[source[key]] = key;
  }
  return invertedObject;
}
