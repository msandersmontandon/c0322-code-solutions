const fs = require('fs');
const data = require('./data.json');
const [, , operation] = process.argv;

switch (operation) {
  case 'read': {
    for (const key in data.notes) {
      console.log(`${key}: ${data.notes[key]}`);
    }
    break;
  } case 'create': {
    const [, , , entry] = process.argv;
    data.notes[data.nextId++] = entry;
    break;
  } case 'delete': {
    const [, , , id] = process.argv;
    delete data.notes[id];
    break;
  } case 'update': {
    const [, , , id, entry] = process.argv;
    data.notes[id] = entry;
  }
}

const dataJSON = JSON.stringify(data, null, 2);
fs.writeFile('./data.json', dataJSON, err => { if (err) throw err; });
