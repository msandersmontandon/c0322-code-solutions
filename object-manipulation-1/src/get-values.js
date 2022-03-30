/* exported getValues */

/** pseudocode for getValues
 * 1. make the function definition for getValues() with 1 paramether: object;
 * 2. delcare a new variable values and assign an empty array to it;
 * 3. using a for in loop, iterate through the key properties of the object paramether;
 * 4. append the value for the current key property of the object paramether into the end of the values array;
 * 5. after the end of the for in loop, return from the function the value of the variable values.
 */

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
