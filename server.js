const express = require('express');

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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});