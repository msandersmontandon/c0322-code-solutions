/* exported omit */

/** pseudocode for omit
 * 1. make the function definition for omit() with 2 paramethers: source and keys;
 * 2. declare a variable unOmittedProperties and assign an empty object literal to it;
 * 3. declare a variable keyToOmitFound and assign a booleam value of false to it;
 * 4. using a for in loop, iterate through the key property names of the source paramether;
 * 5. using a for loop, iterate through the indexes of the keys paramether;
 * 6. using an guarded if statement, check if the current key property name of the source paramether is:
 * 7. strictly equal to the value at the current index of the keys paramether;
 * 8. if it is, assign to the keyToOmitFound variable the boolean value of true to it;
 * 9. after the loop iterating through the indexes of the keys paramether:
 * 10. use an if statement to check if the keyToOmitFound variable still has the value of false;
 * 11. if it has still, assign the current key:value pair of the source paramether to the unOmittedProperties objects;
 * 12. after the last loop, return from the function the value of the unOmittedProperties variable.
 */

function omit(source, keys) {
  var unOmittedProperties = {};
  var keyToOmitFound = false;
  for (var key in source) {
    keyToOmitFound = false;
    for (var i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        keyToOmitFound = true;
      }
    }
    if (!keyToOmitFound) {
      unOmittedProperties[key] = source[key];
    }
  }
  return unOmittedProperties;
}
