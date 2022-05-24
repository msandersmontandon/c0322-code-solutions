const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, 'public');
const publicStatic = express.static(publicPath);

app.use(publicStatic);

app.listen(3000, () => {
  process.stdout.write('Express Server listening on port 3000\n');
});
