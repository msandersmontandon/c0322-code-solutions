/** pseudocode for the main.js
 * We'l set some variables at first, two of them arrays (one carrying the images for each page, the other the DOM objects for the buttons.
 * Note that the index for each array is the same for the pair image/button, and that said index is 1 less than the page number). The rest
 * of the variables will carry the DOM objects for each of the arrows, for the <img> element and for the <div.shortcut> parent element for the buttons.
 * Of course, there are also 2 numerical variables, one for the current page (a number from 1 to 5) and the other for the future timeoutID.
 *
 * Then, 3 function will be definide to carry the behaviors of loading a new page (the turnPage() function), of turning over the next page
 * (the nextPage() function, which increments the page number and call the turnPage() function) and finally to turn back the previous page
 * (the previousPage() function, which decrements )the page number and call the turnPage() function.
 *
 * Three event listeners should be added, one for each arrow and the last for the shortcut div. The arrow event listeners should just call the nextPage()
 * or previousPage() functions, but the shortcut one should check which button was clicked, assign their data-view attribute value to the page variable,
 * then call the turnPage() function.
 *
 * Finally, an interval of 3 seconds should be set to call the nextPage() function, and of course the timeoutID should reset after each turnPage(), so the
 * arrows or the buttons being clicked will cause the timer to reset each time.
 */

var imagesArray = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/104.png'
];

var page = 1;
var timeoutID = null;
var $buttonArray = document.querySelectorAll('button');
var $arrowLeft = document.querySelector('.left i');
var $arrowRight = document.querySelector('.right i');
var $image = document.querySelector('.image img');
var $shortcut = document.querySelector('.shortcut');

function turnPage() {
  $image.setAttribute('src', imagesArray[page - 1]);
  for (var i = 0; i < $buttonArray.length; i++) {
    if (i === page - 1) {
      $buttonArray[i].className = 'selected';
    } else {
      $buttonArray[i].className = '';
    }
  }
  clearInterval(timeoutID);
  timeoutID = setInterval(nextPage, 3000);
}

function nextPage() {
  if (page < $buttonArray.length) {
    page++;
  } else {
    page = 1;
  }
  turnPage();
}

function previousPage() {
  if (page > 1) {
    page--;
  } else {
    page = $buttonArray.length;
  }
  turnPage();
}

$shortcut.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    page = parseInt(event.target.getAttribute('data-view'));
    turnPage();
  }
});

$arrowLeft.addEventListener('click', previousPage);
$arrowRight.addEventListener('click', nextPage);

timeoutID = setInterval(nextPage, 3000);
