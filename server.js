const express = require('express');

const fs = require('fs');

const path = require('path');

const port = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}! Visit http://localhost:${port} in your browser!`);
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});


app.post('/api/notes', (req, res) => {
    res.send('POST request to the notes page');
});

app.get('/api/notes', (req, res) => {
    let notes = fs.readFileSync('./db/db.json', 'utf8');
    notes = JSON.parse(notes);
    res.json(notes);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});