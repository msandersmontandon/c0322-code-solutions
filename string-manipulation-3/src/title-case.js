/* exported titleCase */

/** the official guidlines for an APA Title Case capitalization is as follow:
 * a. Capitalize the first word of the title/heading and of any subtitle/subheading;
 * b. Capitalize all “major” words (nouns, verbs, adjectives, adverbs, and pronouns) in the title/heading, including the second part of hyphenated major words (e.g., Self-Report not Self-report); and
 * c. Capitalize all words of four letters or more.
 * which leads to a fourth direction:
 * d. Only "minor" words of three letters or fewer should be lowercase, which means that only only conjunctions and prepositions that don't fall under a. will be lowercased.
 */

/** pseudocode for titleCase (part 1/2): variable declarations & function definitions
 * 1. make the function definition for titleCase() with 1 parameter: title;
 * 2. declare the variable lowerCased and assign to it the string value of th title parameter taken to lowercase;
 * 3. declare the variable titleWords and assign to it the array of strings split from the lowersCased string at the empty spaces;
 * 4. declare the variable colon and assign the boolean value of false to it;
 * 5. declare the variable dealtWith and assign the boolean value of false to it;
 * 6. declare the variable capitalLetter and assign an empty string to it;
 * 7. declare the variable titleCased and assign an empty string to it;
 * 8. declare the variabe currentWord and assign an empty string to it;
 * 9-30. make the function definition for specialCase() with 1 parameter: word;
 * 31-38. make the function definition for exception() with 1 paramether: word;
 * 39-48. make the function definition for capitalizeFirst() with 1 parameter: word;
 * 49-62. make the function definition for dashCase() with 1 parameter: word;
 * 63-84. follow the instrunction for the pseducode for titleCase (part 2/2)
 */

function titleCase(title) {
  var lowerCased = title.toLowerCase();
  var titleWords = lowerCased.split(' ');
  var colon = false;
  var dealtWith = false;
  var capitalLetter = '';
  var titleCased = '';
  var currentWord = '';

  /** pseudocode for specialCase
   * 1. make the function definition for specialCase() with 1 parameter: word;
   * 2. usign a switch statement, check the value of the word parameter against the following cases:
   * 3. in the case of matching with the string 'javascript':
   * 4. assign the string 'JavaScript' to the word variable;
   * 5. assign the boolean value of false to the colon variable;
   * 6. assign the boolean value of true to the dealtWith variable;
   * 7. break from the switch cases;
   * 8. then in the case of matching with the string 'javascript:':
   * 9. assign the string 'JavaScript:' to the word variable;
   * 10. assign the boolean value of true to the colon variable;
   * 11. assign the boolean value of true to the dealtWith variable;
   * 12. break from the switch cases;
   * 13. then in the case of matching with the string 'api':
   * 14. assign the string 'API' to the word variable;
   * 15. assign the boolean value of false to the colon variable;
   * 16. assign the boolean value of true to the dealtWith variable;
   * 17. break from the switch cases;
   * 18. then in the case of matching with the string 'api:':
   * 19. assign the string 'API:' to the word variable;
   * 20. assign the boolean value of true to the colon variable;
   * 21. assign the boolean value of true to the dealtWith variable;
   * 22. after the end of the switch cases, return from the function the value of the word variable.
   */

  function specialCases(word) {
    switch (word) {
      case 'javascript':
        word = 'JavaScript';
        colon = false;
        dealtWith = true;
        break;
      case 'javascript:':
        word = 'JavaScript:';
        colon = true;
        dealtWith = true;
        break;
      case 'api':
        word = 'API';
        colon = false;
        dealtWith = true;
        break;
      case 'api:':
        word = 'API:';
        colon = true;
        dealtWith = true;
    }
    return word;
  }

  /** pseudocode for exception
   * 1. make the function definition for exception() with 1 parameter: word;
   * 2. use a switch statement to check the value of the word parameter against the following cases:
   * 3. in the case of matching with any between the strings 'in', 'the', 'of', 'for', 'to', 'on' or 'and':
   * 4. assign the boolean value of false to the colon variable;
   * 5. assign the boolean value of true to the dealtWith variable;
   * 6. then in the case of matching with any between the strings 'in:', 'the:', 'of:', 'for:', 'to:', 'on:' or 'and:':
   * 7. assign the boolean value of true to the colon variable;
   * 8. assign the boolean value of true to the dealtWith variable.
   */

  function exception(word) {
    switch (word) {
      case 'in':
      case 'the':
      case 'of':
      case 'for':
      case 'to':
      case 'on':
      case 'and':
        colon = false;
        dealtWith = true;
        break;
      case 'in:':
      case 'the:':
      case 'of:':
      case 'for:':
      case 'to:':
      case 'on:':
      case 'and:':
        colon = false;
        dealtWith = true;
    }
  }

  /** pseudocode for capitalizeFirst
   * 1. make the function definition for capitalizeFirst() with 1 parameter: word
   * 2. reassign the boolean value of false to the colon variable;
   * 3. assign the character at the first index of the word parameter to the capitalLetter variable;
   * 4. assign the rest of the word parameter to the lowerCased variable;
   * 5. concatenate the capitalLetter string taken to the upper letter with the lowerCased string, and then:
   * 6. assign the result of that expression to the word variable;
   * 7. then use an if statement to check if the word string ends with a colon;
   * 8. if it does, assign the boolean value of true to the colon variable;
   * 9. then after the end of that if statement, assign the boolean value of true to the dealtWith variable;
   * 10. return from the function the value of the word variable.
   */

  function capitalizeFirst(word) {
    colon = false;
    capitalLetter = word.at(0);
    lowerCased = word.slice(1);
    word = capitalLetter.toUpperCase() + lowerCased;
    if (word.endsWith(':')) {
      colon = true;
    }
    dealtWith = true;
    return word;
  }

  /** pseudocode for dashCase
   * 1. make the function definition for dashCase() with 1 parameter: word;
   * 2. declare the variable wordsArray and assign to it the array of strings split from the word parameter at the dashes;
   * 3. declare the variable localWord and assign an empty string to it;
   * 4. assign an empty string to the word variable;
   * 5. using a for loop, iterate through the indexes of the wordsArray array;
   * 6. reassign the boolean value of false to the dealtWith variable;
   * 7. assign the string at the current index of the wordsArray array to the localWord array;
   * 8. call the function specialCases() with 1 argument: the localWord variable. Then assign the return value of that function back to the localWord variable;
   * 9. use an if statement to check if the dealtWith variable is still false;
   * 10. if it still is, call the function capitalizeFirst() with 1 argument: the localWord variable. Then assign the return value of that function back to the localWord variable;
   * 11. then after the end of that if statement, concatenate the word string with the localWord string, and then:
   * 12. concatenate the result of that expression to a dash, and then assign the result of that expression back to the word variable;
   * 13. then after the end of the for loop, assign the string sliced from the beggining until the second to last character of the word string back to the word variable;
   * 14. return from the function the value of the word variable.
   */

  function dashCase(word) {
    var wordsArray = word.split('-');
    var localWord = '';
    word = '';
    for (var j = 0; j < wordsArray.length; j++) {
      dealtWith = false;
      localWord = wordsArray[j];
      localWord = specialCases(localWord);
      if (!dealtWith) {
        localWord = capitalizeFirst(localWord);
      }
      word += localWord + '-';
    }
    word = word.slice(0, word.length - 1);
    return word;
  }

  /** pseudocode fortitleCase (part 2/2): functionality instructions
   * 1. use a for loop to iterate through the indexes of the titleWords array;
   * 2. then assign the string at the current index of the titleWords array to the currentWord variable;
   * 3. reassign the boolean value of false to the dealtWith variable;
   * 4. first use an if statement to check if the string value at the currentWord includes a dash;
   * 5. if it does, call the dashCase() function with 1 argument: the value of the currentWord variable. Then:
   * 6. assign the return value of that function back to the currentWord variable;
   * 7. second, after the end of the first if statement, use an if statement to check if the boolean value of the dealtWith variable is still false;
   * 8. if it still is, call the specialCase() function with 1 argument: the value of the currentWord variable. Then:
   * 9. assign the return value of that function back to the currentWord variable;
   * 10. third, after the end of the second if statement, use an if statement to check if the current index is already past the first index;
   * 11. fourth, if it already is, use an if statement to check if both the boolean value of the colon variable is true & if the boolean value of the dealtWith variable is still false;
   * 12. if both of those are the case, call the capitalizeFirst() function with 1 argument: the value of the currentWord variable. Then:
   * 13. assign the return value of that function back to the currentWord variable;
   * 14. fifth, after the end of the fourth if statement, use an if statement to check if the boolean value of the dealtWith variable is still false;
   * 15. if it still is, call the exception() function with 1 argument; the value of the currentWord variable.
   * 16. sixth, after the end of both the fifth and the third if statement, use an if statement to check if the boolean value of the dealtWith variable is still false;
   * 17. if it still is, call the capitalizeFirst() function with 1 argument: the value of the currentWord variable. Then:
   * 18. assign the return value of that function back to the currentWord variable;
   * 19. then, after the end of the sixth if statement, concatenate the string value of the titleCased variable with the string value of the currentWord variable, then:
   * 20. concatenate the result of that expression with an empty space, and then assign the result of that expression to the titleCased variable;
   * 21. then, after the end of that for loop, trim the end of the titleCased string and assign the resulting string back to the titleCased variable;
   * 22. return from the function the value of the titleCased variabale.
   */

  for (var i = 0; i < titleWords.length; i++) {
    currentWord = titleWords[i];
    dealtWith = false;
    if (currentWord.includes('-')) {
      currentWord = dashCase(currentWord);
    }
    if (!dealtWith) {
      currentWord = specialCases(currentWord);
    }
    if (i > 0) {
      if (colon && !dealtWith) {
        currentWord = capitalizeFirst(currentWord);
      }
      if (!dealtWith) {
        exception(currentWord);
      }
    }
    if (!dealtWith) {
      currentWord = capitalizeFirst(currentWord);
    }
    titleCased += currentWord + ' ';
  }
  titleCased = titleCased.trimEnd();
  return titleCased;
}
