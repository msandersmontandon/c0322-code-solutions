/* exported defaults */

/** pseudocode for defaults
 * 1. make the function definition for defaults() with 2 paramethers: target and source;
 * 2. declare a variable keyMatch and assign the boolean value of false to it;
 * 3. use a for in loop to iterate through the sourceKey property names of the source paramether;
 * 4. use another fo in loop to iterate through the targetKey property names of the property paramether;
 * 5. using an if statement, check if the current sourceKey and the current targetKey property names match;
 * 6. if they do, assign the boolean value of true to the keyMatch variable;
 * 7. after the end of the sourceKey for in loop, use an if statement to check if the value of KeyMatch variable is strictly equal to the boolean false;
 * 8. if it is, assign the key:value pair for the property named (current sourceKey) to the target paramether;
 * 9. then, after the if statement, assign the boolean value of false to the keyMatch variable.
 */

function defaults(target, source) {
  var keyMatch = false;
  for (var sourceKey in source) {
    for (var targetKey in target) {
      if (sourceKey === targetKey) {
        keyMatch = true;
      }
    }
    if (!keyMatch) {
      target[sourceKey] = source[sourceKey];
    }
    keyMatch = false;
  }
}
