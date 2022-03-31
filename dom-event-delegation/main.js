var $taskList = document.querySelector('ul.task-list');
$taskList.addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var $taskListItem = event.target.closest('.task-list-item');
    console.log('closest .task-item-list', $taskListItem);
    $taskListItem.remove();
  }
});
