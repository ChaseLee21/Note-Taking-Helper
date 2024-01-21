//imports and variables
const express = require('express');

const fs = require('fs');

const path = require('path');

const port = process.env.PORT || 3001;

// initialize express
const app = express();

// server static files
app.use(express.static('public'));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

// start the server on specified port
app.listen(port, () => {
    console.log(`Server listening on port ${port}! Visit http://localhost:${port} in your browser!`);
});

// define routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.post('/api/notes', (req, res) => {
    console.log(req.body);
    res.send('POST request to the notes page');
});

app.get('/api/notes', (req, res) => {
    let notes = fs.readFileSync('./db/db.json', 'utf8');
    notes = JSON.parse(notes);
    res.json(notes);
});

// default route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});