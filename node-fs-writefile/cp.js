const fs = require('fs');
const [, , file, copy] = process.argv;

fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;
  fs.writeFile(copy, data, err => { if (err) throw err; });
});
