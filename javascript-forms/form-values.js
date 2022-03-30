var $contactForm = document.forms[0];
$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var messageData = {};
  for (var i = 0; i < $contactForm.length; i++) {
    messageData[$contactForm.elements[i].name] = $contactForm.elements[i].value;
  }
  console.log('messageData:', messageData);
  $contactForm.reset();
});
