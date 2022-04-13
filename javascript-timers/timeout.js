var $message = document.querySelector('.message');

function greeting(element) {
  element.textContent = 'Hello There';
}

setTimeout(greeting, 2000, $message);
