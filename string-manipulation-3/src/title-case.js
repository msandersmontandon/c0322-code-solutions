/* exported titleCase */
/* exported caseWord */
/* exported */
/* */
/* */

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
  titleCased = titleCased.slice(0, titleCased.length - 1);
  return titleCased;
}
