const fs = require('fs');
const [, , file] = process.argv;

fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
