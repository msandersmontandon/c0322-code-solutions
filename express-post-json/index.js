const express = require('express');
const app = express();
let nextId = 1;
const grades = {};
const eJson = express.json();

app.use(eJson);

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  grade.id = nextId++;
  grades[grade.id] = grade;
  res.status(201).send(grade);
});

app.listen(3000, () => {
  // console.log('Express server listening on port 3000');
});
