const express = require('express');
const fs = require('fs');
const app = express();
const data = require('./data.json');
app.use(express.json());

app.get('/api/notes', (req, res) => {
  const dataArray = [];
  for (const key in data.notes) {
    dataArray.push(data.notes[key]);
  }
  res.json(dataArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (!Number.isInteger(Number(id)) || Number(id) < 1) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (data.notes[id] === undefined) {
    res.status(404).send({ error: `cannot find note with id ${id}` });
  } else {
    res.json(data.notes[id]);
  }
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  if (newNote.content === undefined) {
    res.status(400).send('content is a required field');
  } else {
    const id = data.nextId++;
    data.notes[id] = {
      id: id,
      content: newNote.content
    };
    const dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataJSON, err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error ocurred.' });
      } else {
        res.status(201).send(data.notes[id]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (!Number.isInteger(Number(id)) || Number(id) < 1) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (data.notes[id] === undefined) {
    res.status(404).send({ error: `cannot find note with id ${id}` });
  } else {
    delete data.notes[id];
    const dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataJSON, err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error ocurred.' });
      } else {
        res.status(204).end();
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const newNote = req.body;
  if (!Number.isInteger(Number(id)) || Number(id) < 1) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (newNote.content === undefined) {
    res.status(400).send('content is a required field');
  } else if (data.notes[id] === undefined) {
    res.status(404).send({ error: `cannot find note with id ${id}` });
  } else {
    data.notes[id].content = newNote.content;
    const dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataJSON, err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error ocurred.' });
      } else {
        res.status(200).send(data.notes[id]);
      }
    });
  }
});

app.listen(3000, () => {
  process.stdout.write('Express Server listening on port 3000\n');
});
