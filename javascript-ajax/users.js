var $userList = document.querySelector('#user-list');
var requestList = new XMLHttpRequest();
requestList.open('GET', 'https://jsonplaceholder.typicode.com/users');
requestList.responseType = 'json';

requestList.addEventListener('load', function (event) {
  console.log('requestList status:', requestList.status);
  console.log('requestList response:', requestList.response);
  for (var i = 0; i < requestList.response.length; i++) {
    var $listEntry = document.createElement('li');
    $listEntry.textContent = requestList.response[i].name;
    $userList.appendChild($listEntry);
  }
});
requestList.send();
