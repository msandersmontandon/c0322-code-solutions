/* exported titleCase */

/** pseudocode for titleCase
 * the official guidlines for an APA Title Case capitalization is as follow:
 * a. Capitalize the first word of the title/heading and of any subtitle/subheading;
 * b. Capitalize all “major” words (nouns, verbs, adjectives, adverbs, and pronouns) in the title/heading, including the second part of hyphenated major words (e.g., Self-Report not Self-report); and
 * c. Capitalize all words of four letters or more.
 * which leads to a fourth direction:
 * d. Only "minor" words of three letters or fewer should be lowercase, which means that only only conjunctions and prepositions that don't fall under a. will be lowrcased.
 * now, I planned to have roughly 1 function for each of these 4 rules, but it turns out I'll be only exporting the titleCase() function to be tested;
 * nevertheless, I decided to leave commented out the pieces of thoses function in the code, as they give clues to my decision-making process for this algorithm;
 * 1. make the function definition for titleCase() with 1 paramether: title;
 */

function titleCase(title) {
  var lowerCased = title.toLowerCase();
  var titleWords = lowerCased.split(' ');
  var colon = false;
  var dealtWith = false;
  var capitalLetter = '';
  var titleCased = '';
  var currentWord = '';

  // function caseWord(word) {
  //   if (dealtWith) {
  //     return;
  //   }
  //   colon = false;
  //   capitalLetter = word.at(0);
  //   lowerCased = word.slice(1);
  //   word = capitalLetter.toUpperCase() + lowerCased;
  //   if (word.endsWith(':')) {
  //     colon = true;
  //   }
  //   dealtWith = true;
  // }

  // function specialCase(word) {
  //   if (dealtWith) {
  //     return;
  //   }
  //   if (word === 'javascript') {
  //     word = 'JavaScript';
  //     colon = false;
  //     dealtWith = true;
  //   }
  //   if (word === 'javascript:') {
  //     word = 'JavaScript:';
  //     colon = true;
  //     dealtWith = true;
  //   }
  //   if (word === 'api') {
  //     word = 'API';
  //     colon = false;
  //     dealtWith = true;
  //   }
  //   if (word === 'api:') {
  //     word = 'API:';
  //     colon = true;
  //     dealtWith = true;
  //   }
  // }

  // function dashCase(word) {
  //   if (word.includes('-')) {
  //     var wordsArray = word.split('-');
  //     var localWord = '';
  //     word = '';
  //     for (var j = 0; j < wordsArray.length; j++) {
  //       dealtWith = false;
  //       localWord = wordsArray[j];
  //       specialCase(localWord);
  //       caseWord(localWord);
  //       word += localWord + '-';
  //     }
  //     word = word.slice(0, word.length - 1);
  //   }
  // }

  // function exception(word) {
  //   if (dealtWith) {
  //     return;
  //   }
  //   if (word === 'in') {
  //     colon = false;
  //     dealtWith = true;
  //   }
  //   if (word === 'in:') {
  //     colon = true;
  //     dealtWith = true;
  //   }
  //   if (word === 'the') {
  //     colon = false;
  //     dealtWith = true;
  //   }
  //   if (word === 'the:') {
  //     colon = true;
  //     dealtWith = true;
  //   }
  //   if (word === 'of') {
  //     colon = false;
  //     dealtWith = true;
  //   }
  //   if (word === 'of:') {
  //     colon = true;
  //     dealtWith = true;
  //   }
  //   if (word === 'for') {
  //     colon = false;
  //     dealtWith = true;
  //   }
  //   if (word === 'for:') {
  //     colon = true;
  //     dealtWith = true;
  //   }
  //   if (word === 'to') {
  //     colon = false;
  //     dealtWith = true;
  //   }
  //   if (word === 'to:') {
  //     colon = true;
  //     dealtWith = true;
  //   }
  //   if (word === 'on') {
  //     colon = false;
  //     dealtWith = true;
  //   }
  //   if (word === 'on:') {
  //     colon = true;
  //     dealtWith = true;
  //   }
  //   if (word === 'and') {
  //     colon = false;
  //     dealtWith = true;
  //   }
  //   if (word === 'and:') {
  //     colon = true;
  //     dealtWith = true;
  //   }
  // }

  // currentWord = titleWords[0];
  // dashCase(currentWord);
  // specialCase(currentWord);
  // caseWord(currentWord);
  // titleCased += currentWord + ' ';
  for (var i = 0; i < titleWords.length; i++) {
    currentWord = titleWords[i];
    dealtWith = false;
    // dashCase(currentWord);
    // function dashCase(word) {
    if (currentWord.includes('-')) {
      var wordsArray = currentWord.split('-');
      var localWord = '';
      currentWord = '';
      for (var j = 0; j < wordsArray.length; j++) {
        dealtWith = false;
        localWord = wordsArray[j];
        // specialCase(localWord);
        if (!dealtWith) {
          if (localWord === 'javascript') {
            localWord = 'JavaScript';
            colon = false;
            dealtWith = true;
          }
          if (localWord === 'javascript:') {
            localWord = 'JavaScript:';
            colon = true;
            dealtWith = true;
          }
          if (localWord === 'api') {
            localWord = 'API';
            colon = false;
            dealtWith = true;
          }
          if (localWord === 'api:') {
            localWord = 'API:';
            colon = true;
            dealtWith = true;
          }
        }
        // caseWord(localWord);
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
    // }
    // specialCase(currentWord);
    // function specialCase(word) {
    if (!dealtWith) {
      if (currentWord === 'javascript') {
        currentWord = 'JavaScript';
        colon = false;
        dealtWith = true;
      }
      if (currentWord === 'javascript:') {
        currentWord = 'JavaScript:';
        colon = true;
        dealtWith = true;
      }
      if (currentWord === 'api') {
        currentWord = 'API';
        colon = false;
        dealtWith = true;
      }
      if (currentWord === 'api:') {
        currentWord = 'API:';
        colon = true;
        dealtWith = true;
      }
    }
    if (i > 0) {
      if (colon) {
        // caseWord(currentWord);
        // function caseWord(word) {
        if (!dealtWith) {
          colon = false;
          capitalLetter = currentWord.at(0);
          lowerCased = currentWord.slice(1);
          currentWord = capitalLetter.toUpperCase() + lowerCased;
          if (currentWord.endsWith(':')) {
            colon = true;
          }
          dealtWith = true;
        }
      }
      // exception(currentWord);
      // function exception(word) {
      if (!dealtWith) {
        if (currentWord === 'in') {
          colon = false;
          dealtWith = true;
        }
        if (currentWord === 'in:') {
          colon = true;
          dealtWith = true;
        }
        if (currentWord === 'the') {
          colon = false;
          dealtWith = true;
        }
        if (currentWord === 'the:') {
          colon = true;
          dealtWith = true;
        }
        if (currentWord === 'of') {
          colon = false;
          dealtWith = true;
        }
        if (currentWord === 'of:') {
          colon = true;
          dealtWith = true;
        }
        if (currentWord === 'for') {
          colon = false;
          dealtWith = true;
        }
        if (currentWord === 'for:') {
          colon = true;
          dealtWith = true;
        }
        if (currentWord === 'to') {
          colon = false;
          dealtWith = true;
        }
        if (currentWord === 'to:') {
          colon = true;
          dealtWith = true;
        }
        if (currentWord === 'on') {
          colon = false;
          dealtWith = true;
        }
        if (currentWord === 'on:') {
          colon = true;
          dealtWith = true;
        }
        if (currentWord === 'and') {
          colon = false;
          dealtWith = true;
        }
        if (currentWord === 'and:') {
          colon = true;
          dealtWith = true;
        }
      }
    }
    // caseWord(currentWord);
    if (!dealtWith) {
      colon = false;
      capitalLetter = currentWord.at(0);
      lowerCased = currentWord.slice(1);
      currentWord = capitalLetter.toUpperCase() + lowerCased;
      if (currentWord.endsWith(':')) {
        colon = true;
      }
      dealtWith = true;
    }
    // console.log(currentWord);
    titleCased += currentWord + ' ';
  }
  titleCased = titleCased.trimEnd();
  return titleCased;
}
