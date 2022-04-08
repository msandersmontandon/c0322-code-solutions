/* exported titleCase */

/** pseudocode for titleCase
 * the official guidlines for an APA Title Case capitalization is as follow:
 * a. Capitalize the first word of the title/heading and of any subtitle/subheading;
 * b. Capitalize all “major” words (nouns, verbs, adjectives, adverbs, and pronouns) in the title/heading, including the second part of hyphenated major words (e.g., Self-Report not Self-report); and
 * c. Capitalize all words of four letters or more.
 * which leads to a fourth direction:
 * d. Only "minor" words of three letters or fewer should be lowercase, which means that only only conjunctions and prepositions that don't fall under a. will be lowercased.
 * with these directives in mind, here's the code to implement:
 * 1. make the function definition for titleCase() with 1 paramether: title;
 * 2. declare the variable lowerCased and assign to it the string value of th title paramether taken to lowercase;
 * 3. declare the variable titleWords and assign to it the array of strings split from the lowersCased string at the empty spaces;
 * 4. declare the variable colon and assign the boolean value of false to it;
 * 5. declare the variable dealtWith and assign the boolean value of false to it;
 * 6. declare the variable capitalLetter and assign an empty string to it;
 * 7. declare the variable titleCased and assign an empty string to it;
 * 8. declare the variabe currentWord and assign an empty string to it;
 * 9. using a for loop, iterate through the indexes of the titleWords array;
 * 10. assign the string at the current index of the titleWords array to the currentWord variable;
 * 11. reassign the boolean value of false to the dealtWith variable;
 * 12. using an if statement, check if the currentWord string includes the dash character;
 * 13. if it does, declare a new variable wordsArray and assign to it the array of strings split from the currentWord string at the dashes;
 * 14. declare the variable local word and assign an empty string to it;
 * 15. assign an empty string to the currentWord variable;
 * 16. using a for loop, iterate through the indexes of the wordsArray array;
 * 17. reassign the boolean value of false to the dealtWith variable;
 * 18. assign the string at the current index of the wordsArray array to the localWord array;
 * 19. usign a switch statement, check the value of the localWord string against the following cases:
 * 20. in the case of matching with the string 'javascript':
 * 21. assign the string 'JavaScript' to the localWord variable;
 * 22. assign the boolean value of false to the colon variable;
 * 23. assign the boolean value of true to the dealtWith variable;
 * 24. break from the switch cases;
 * 25. then in the case of matching with the string 'javascript:':
 * 26. assign the string 'JavaScript:' to the localWord variable;
 * 27. assign the boolean value of true to the colon variable;
 * 28. assign the boolean value of true to the dealtWith variable;
 * 29. break from the switch cases;
 * 30. then in the case of matching with the string 'api':
 * 31. assign the string 'API' to the localWord variable;
 * 32. assign the boolean value of false to the colon variable;
 * 33. assign the boolean value of true to the dealtWith variable;
 * 34. break from the switch cases;
 * 35. then in the case of matching with the string 'api:':
 * 36. assign the string 'API:' to the localWord variable;
 * 37. assign the boolean value of true to the colon variable;
 * 38. assign the boolean value of true to the dealtWith variable;
 * 39. after the end of the switch cases, use an if statement to check if the dealtWith variable is still false;
 * 40. if it still is, reassign the boolean value of false to the colon variable;
 * 41. assign the character at the first index of the localWord string to the capitalLetter variable;
 * 42. assign the rest of the localWord string to the lowerCased variable;
 * 43. concatenate the capitalLetter string taken to the upper letter with the lowerCased string, and then:
 * 44. assign the result of that expression to the localWord variable;
 * 45. then use an if statement to check if the localWord string ends with a colon;
 * 46. if it does, assign the boolean value of true to the colon variable;
 * 47. then after the end of that if statement, assign the boolean value of true to the dealtWith variable;
 * 48. then after the end of that if statement, concatenate the currentWord string with the localWord string, and then:
 * 49. concatenate the result of that expression to a dash, and then assign the result of that expression back to the currentWord variable;
 * 50. then after the end of the for loop, assign the string sliced from the beggining until the second to last character of the currentWord string back to the currentWord variable;
 * 51. then after the end of that if statement, use an if statement to check if the dealtWith variable is still false;
 * 52. if it still is, use a switch statement to check the value of the currentWord string against the following cases:
 * 53. in the case of matching with the string 'javascript':
 * 54. assign the string 'JavaScript' to the localWord variable;
 * 55. assign the boolean value of false to the colon variable;
 * 56. assign the boolean value of true to the dealtWith variable;
 * 57. break from the switch cases;
 * 58. then in the case of matching with the string 'javascript:':
 * 59. assign the string 'JavaScript:' to the localWord variable;
 * 60. assign the boolean value of true to the colon variable;
 * 61. assign the boolean value of true to the dealtWith variable;
 * 62. break from the switch cases;
 * 63. then in the case of matching with the string 'api':
 * 64. assign the string 'API' to the localWord variable;
 * 65. assign the boolean value of false to the colon variable;
 * 66. assign the boolean value of true to the dealtWith variable;
 * 67. break from the switch cases;
 * 68. then in the case of matching with the string 'api:':
 * 69. assign the string 'API:' to the localWord variable;
 * 70. assign the boolean value of true to the colon variable;
 * 71. assign the boolean value of true to the dealtWith variable;
 * 72. then after the end of the switch cases, and of that if statement, use an if statement to check for loop index for the titleWords array is past the first;
 * 73. if it already is, use an if statement to check if the colon variable is true;
 * 74. if it is, reassign the boolean value of false to the colon variable;
 * 75. assign the character at the first index of the currentWord string to the capitalLetter variable;
 * 76. assign the rest of the currentWord string to the lowerCased variable;
 * 77. concatenate the capitalLetter string taken to the upper letter with the lowerCased string, and then:
 * 78. assign the result of that expression to the currentWord variable;
 * 79. then use an if statement to check if the currentWord string ends with a colon;
 * 80. if it does, assign the boolean value of true to the colon variable;
 * 81. then after the end of that if statement, assign the boolean value of true to the dealtWith variable;
 * 82. then after the end of that if statement, use an if statement to check if the dealtWith variable is still false;
 * 83. if it still is, use a switch statement to check the value of the currentWord string against the following cases:
 * 84. in the case of matching with any between the strings 'in', 'the', 'of', 'for', 'to', 'on' or 'and':
 * 85. assign the boolean value of false to the colon variable;
 * 86. assign the boolean value of true to the dealtWith variable;
 * 87. then in the case of matching with any between the strings 'in:', 'the:', 'of:', 'for:', 'to:', 'on:' or 'and:':
 * 88. assign the boolean value of true to the colon variable;
 * 89. assign the boolean value of true to the dealtWith variable;
 * 90. then after the end of the switch cases, and the past two if statements, use an if statement to check if the dealtWith variable is still false;
 * 91. if it still is, assign the character at the first index of the currentWord string to the capitalLetter variable;
 * 92. assign the rest of the currentWord string to the lowerCased variable;
 * 93. concatenate the capitalLetter string taken to the upper letter with the lowerCased string, and then:
 * 94. assign the result of that expression to the currentWord variable;
 * 95. then use an if statement to check if the currentWord string ends with a colon;
 * 96. if it does, assign the boolean value of true to the colon variable;
 * 97. then after the end of that if statement, assign the boolean value of true to the dealtWith variable;
 * 98. then after the end of that if statement, concatenate the titleCased string with the currentWord string, and then:
 * 99. concatonate the result of that expression with an empty space, and then assign the result of that expression back to the titleCased variable;
 * 100. then after the for loop, trim the end of the titleCased string and assign it back to the titleCased variable;
 * 101. return from the function the value of the titleCased string;
 */

function titleCase(title) {
  var lowerCased = title.toLowerCase();
  var titleWords = lowerCased.split(' ');
  var colon = false;
  var dealtWith = false;
  var capitalLetter = '';
  var titleCased = '';
  var currentWord = '';

  for (var i = 0; i < titleWords.length; i++) {
    currentWord = titleWords[i];
    dealtWith = false;
    if (currentWord.includes('-')) {
      var wordsArray = currentWord.split('-');
      var localWord = '';
      currentWord = '';
      for (var j = 0; j < wordsArray.length; j++) {
        dealtWith = false;
        localWord = wordsArray[j];
        switch (localWord) {
          case 'javascript':
            localWord = 'JavaScript';
            colon = false;
            dealtWith = true;
            break;
          case 'javascript:':
            localWord = 'JavaScript:';
            colon = true;
            dealtWith = true;
            break;
          case 'api':
            localWord = 'API';
            colon = false;
            dealtWith = true;
            break;
          case 'api:':
            localWord = 'API:';
            colon = true;
            dealtWith = true;
        }
        if (!dealtWith) {
          colon = false;
          capitalLetter = localWord.at(0);
          lowerCased = localWord.slice(1);
          localWord = capitalLetter.toUpperCase() + lowerCased;
          if (localWord.endsWith(':')) {
            colon = true;
          }
          dealtWith = true;
        }
        currentWord += localWord + '-';
      }
      currentWord = currentWord.slice(0, currentWord.length - 1);
    }
    if (!dealtWith) {
      switch (currentWord) {
        case 'javascript':
          currentWord = 'JavaScript';
          colon = false;
          dealtWith = true;
          break;
        case 'javascript:':
          currentWord = 'JavaScript:';
          colon = true;
          dealtWith = true;
          break;
        case 'api':
          currentWord = 'API';
          colon = false;
          dealtWith = true;
          break;
        case 'api:':
          currentWord = 'API:';
          colon = true;
          dealtWith = true;
      }
    }
    if (i > 0) {
      if (colon) {
        colon = false;
        capitalLetter = currentWord.at(0);
        lowerCased = currentWord.slice(1);
        currentWord = capitalLetter.toUpperCase() + lowerCased;
        if (currentWord.endsWith(':')) {
          colon = true;
        }
        dealtWith = true;
      }
      if (!dealtWith) {
        switch (currentWord) {
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
    }
    if (!dealtWith) {
      capitalLetter = currentWord.at(0);
      lowerCased = currentWord.slice(1);
      currentWord = capitalLetter.toUpperCase() + lowerCased;
      if (currentWord.endsWith(':')) {
        colon = true;
      }
      dealtWith = true;
    }
    titleCased += currentWord + ' ';
  }
  titleCased = titleCased.trimEnd();
  return titleCased;
}
