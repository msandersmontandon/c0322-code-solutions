/* exported capitalizeWord */

/** pseudocode for capitalizeWord
 * 1. make the function definition for capitalizeWord() with 1 paramether: word;
 * 2. make a guarded if statement for the case when the method call toLowerCase() applied to the word paramether is strictly equal to the string 'javascript':
 * 3. if that is the case, return from the function the string 'JavaScript';
 * 4. Afterwards, if it that wasn't the case, then declare a variable firstLetter and assign to it the first letter of the word paramether;
 * 5. delcare the variable rest and assign the string sliced from the second index onwards of the word paramether;
 * 6. take the firstLetter string to upper case and concatenate it to the rest string taken to lower case, and return the result of that expression from the function;
 */

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  var firstLetter = word.at(0);
  var rest = word.slice(1);
  return firstLetter.toUpperCase() + rest.toLowerCase();
}
