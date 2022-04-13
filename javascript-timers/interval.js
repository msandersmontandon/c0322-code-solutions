var $countdownDisplay = document.querySelector('.countdown-display');

function countdown() {
  var count = parseInt($countdownDisplay.textContent);
  if (count > 1) {
    $countdownDisplay.textContent = --count;
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
  }
}

var timeoutID = setInterval(countdown, 1000);
setTimeout(clearTimeout, 4500, timeoutID);
