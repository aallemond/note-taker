const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/notes.html');
});

app.get('/api/notes', (req, res) => {
  const data = fs.readFileSync(__dirname + '/../Develop/db/db.json');
  const notes = JSON.parse(data);
  res.json(notes);
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});