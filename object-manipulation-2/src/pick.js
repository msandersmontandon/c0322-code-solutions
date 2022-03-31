/* exported pick */

/** pseudocode for pick
 * 1. make the function definition for pick() with 2 paramethers: source, key;
 * 2. declare a variable pickedProperties and assign an empty object to it;
 * 3. using a for loop, iterate through all the indexes of the keys paramether;
 * 4. using a for in loop, iterate through the key property names of the source paramether;
 * 5. use an if statement to check that the current key property name of the source paramether matches the value at the current index of the keys paramether, and:
 * 6. that the value at the current key property of the source paramether is defined;
 * 7. if they are, assign a property named (the current key property name of the source paramether) to the pickedProperties object and assign to it:
 * 8. the value of the property (with the same name) of the source paramether;
 * 9. after the end of the loops, return form the function the value of the pickedProperties variable.
 */

function pick(source, keys) {
  var pickedProperties = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (key === keys[i] && source[key] !== undefined) {
        pickedProperties[key] = source[key];
      }
    }
  }
  return pickedProperties;
}
