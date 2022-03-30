var $char = document.querySelectorAll('span');
var $modal = document.querySelector('.modal');
var $accuracyScore = document.querySelector('.modal > h2');
var $again = document.querySelector('.modal > button');
var index = 0;
var tries = 0;
var mistakes = 0;
var accuracy = 0;
function typingTutor(event) {
  if (event.key === $char.item(index).textContent) {
    $char.item(index).className = 'right';
    index++;
    $char.item(index).className = 'current';
  } else {
    $char.item(index).className = 'wrong current';
    mistakes++;
  }
  tries++;
  accuracy = 1 - (mistakes / tries);
  if (index < $char.length) {
    document.addEventListener('keydown', typingTutor);
  } else {
    $modal.className = 'modal';
    $accuracyScore.textContent = 'Accuracy: ' + accuracy + '%';
    $again.addEventListener('click', playAgain);
  }
}
function playAgain(event) {
  // if (event === 'click' || event.key ==='Enter') {

  // }
}

$char.item(index).className = 'current';
document.addEventListener('keydown', typingTutor);
