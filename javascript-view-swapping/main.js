var $tabContainer = document.querySelector('.tab-container');
var $tabNodeList = document.querySelectorAll('.tab');
var $viewNodeList = document.querySelectorAll('.view');

function compareDataView(element, nodeList) {
  for (var i = 0; i < nodeList.length; i++) {
    if (nodeList[i].getAttribute('data-view') === element.getAttribute('data-view')) {
      // console.log(nodeList[i]);
      return nodeList[i];
    }
  }
}

$tabContainer.addEventListener('click', function (event) {
  if (event.target.className !== 'tab') {
    return;
  }
  var $currentView = {};
  for (var i = 0; i < $tabNodeList.length; i++) {
    if (event.target === $tabNodeList[i]) {
      $currentView = compareDataView(event.target, $viewNodeList);
      event.target.className = 'tab active';
      $currentView.className = 'view';
    } else {
      $currentView = compareDataView($tabNodeList[i], $viewNodeList);
      $tabNodeList[i].className = 'tab';
      $currentView.className = 'view hidden';
    }
  }
  // console.dir(event.target);
  // console.dir($tabNodeList);
});
