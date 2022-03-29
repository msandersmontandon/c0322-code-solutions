var $background = document.querySelector('body');
var $lightBulb = document.querySelector('.light-bulb');
var count = 0;
$lightBulb.addEventListener('click', function (event) {
  count++;
  if (count % 2 === 1) {
    $background.className = 'background-dark';
    $lightBulb.className = 'light-bulb off';
  } else if (count % 2 === 0) {
    $background.className = 'background-lit';
    $lightBulb.className = 'light-bulb on';
  }
  // console.log(count);
});
