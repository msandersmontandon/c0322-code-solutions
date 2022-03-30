var $char = document.querySelectorAll('span');
var $modal = document.querySelector('.modal');
var $accuracyScore = document.querySelector('.modal > h2');
var $again = document.querySelector('.modal > button');
var index = 0;
var tries = 0;
var mistakes = 0;
var accuracy = 0;
function typingTutor(event) {
  if (index < $char.length) {
    if (event.key === $char.item(index).textContent) {
      $char.item(index).className = 'right';
      index++;
      tries++;
      accuracy = (1 - (mistakes / tries)) * 100;
      if (index < $char.length - 1) {
        $char.item(index).className = 'current';
      } else {
        $modal.className = 'modal';
        $accuracyScore.textContent = 'Accuracy: ' + accuracy + '%';
      }
    } else {
      $char.item(index).className = 'wrong current';
      mistakes++;
      tries++;
      accuracy = (1 - (mistakes / tries)) * 100;

    }
    // if (index < $char.length - 2) {
    //   document.addEventListener('keydown', typingTutor);
    // }
  }
}
function playAgain(event) {
  if ($modal.className === 'modal' && (event.type === 'click' || event.key === 'Enter')) {
    $modal.className = 'modal hide';
    $char.forEach(function (items) {
      items.className = '';
    });
    index = 0;
    tries = 0;
    mistakes = 0;
    accuracy = 0;
    $char.item(index).className = 'current';
    document.addEventListener('keydown', typingTutor);
  }
}

$char.item(index).className = 'current';
document.addEventListener('keydown', typingTutor);
$again.addEventListener('click', playAgain);
document.addEventListener('keydown', playAgain);
