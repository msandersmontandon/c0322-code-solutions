
const fs = require('fs');
let result = '';

function concat(index) {
  if (index < process.argv.length) {
    fs.readFile(process.argv[index], 'utf8', (err, data) => {
      if (err) throw err;
      result += data + '\n';
      concat(index + 1);
    });
  } else console.log(result);
}

concat(2);
