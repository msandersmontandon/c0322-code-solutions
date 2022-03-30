/* exported numVowels */

/** pseudocode for numVowels
 * 1. make the function definition for numVowels() with 1 paramether: string;
 * 2. declare the variable count and assign 0 to it;
 * 3. using a for loop, iterate through the length indexes of the string paramether;
 * 4. With a switch condition, check for the cases where the character of the string paramether at the current index:
 * 5. are either lower or upper cased letters, on which case increment the count variable by 1;
 * 6. after the end of the loop, return from the function the value of the variable count.
 */

function numVowels(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    switch (string.at(i)) {
      case 'a':
      case 'A':
      case 'e':
      case 'E':
      case 'i':
      case 'I':
      case 'o':
      case 'O':
      case 'u':
      case 'U':
        count++;
    }
  }
  return count;
}
