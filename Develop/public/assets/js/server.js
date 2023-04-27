const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/notes.html');
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});