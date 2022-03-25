/* exported getStudentNames */
function getStudentNames(students) {
  var studentsName = [];
  for (var i = 0; i < students.length; i++) {
    studentsName.push(students[i].name);
  }
  return studentsName;
}
