/* exported isVowel */

/** pseudocode for isVowel
 * 1. make the function definition for isVowel() with 1 paramether: char;
 * 2. check if the char equals: 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O' or 'U' (use a switch statement);
 * 3. if it does for any of those cases, return true;
 * 4. else, return false.
 */

function isVowel(char) {
  switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
      return true;
  }
  return false;
}
