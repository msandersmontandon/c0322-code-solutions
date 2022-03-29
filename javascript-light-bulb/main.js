var $background = document.querySelector('body');
var $lightBulb = document.querySelector('.light-bulb');
var light = true;
$lightBulb.addEventListener('click', function (event) {
  if (light === true) {
    $background.className = 'background-dark';
    $lightBulb.className = 'light-bulb off';
  } else if (light === false) {
    $background.className = 'background-lit';
    $lightBulb.className = 'light-bulb on';
  }
  light = !light;
});
