/* exported toObject */

/** pseudocode for toObject
 * 1. make the function definition dor toObject() with 1 paramether: keyValuePair;
 * 2. declare a new variable object and assign an empty object to it;
 * 3. assign the value of the keyValuePair paramether at the second index to:
 * 4. a property named after the value of the keyValuePair paramether at the first index of the object object;
 * 5. return from the function the value of the object variable.
 */

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
