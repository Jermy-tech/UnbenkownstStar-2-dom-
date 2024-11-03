const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Route for root.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'root.html'));
});

// Route for onboarding.html
app.get('/onboarding', (req, res) => {
    res.sendFile(path.join(__dirname, 'onboarding.html'));
});

app.get('/404', (req, res) => {
    res.sendFile(path.join(__dirname, '404.html'));
});

app.get('/tos', (req, res) => {
    res.sendFile(path.join(__dirname, 'tos.html'));
});

app.get('/pp', (req, res) => {
    res.sendFile(path.join(__dirname, 'pp.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});