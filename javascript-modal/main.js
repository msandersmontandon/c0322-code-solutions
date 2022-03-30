// var $body = document.querySelector('body');
var $modalBackground = document.querySelector('.modal-background');
var $modalNo = document.querySelector('.no');
// $body.removeChild($modalBackground);
var $openModal = document.querySelector('.open-modal');
function modalOn(event) {
  // $body.appendChild($modalBackground);
  // $modalNo = document.querySelector('.no');
  $modalBackground.className = 'modal-background';
  $modalNo.addEventListener('click', modalOff);
}
function modalOff(event) {
  // $body.removeChild($modalBackground);
  $modalBackground.className = 'moda-backgorund hide';
  $openModal.addEventListener('click', modalOn);
}
$openModal.addEventListener('click', modalOn);
