/* exported reverseWord */

/** pseudocode for reverseWord
 * 1. make the function declaration for reverseWord() with 1 paramether: word;
 * 2. declare a varaiable rever and assign to it an empty string;
 * 3. for each index in string, starting from the last and going to the first, do the following (use a for loop):
 * 4. concatenate reverse with the the char of word at the curret index, and assgin the result to reverse;
 * 5. Once you're done with that for loop, return reverse;
 */

function reverseWord(word) {
  var reverse = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word.at(i);
  }
  return reverse;
}
