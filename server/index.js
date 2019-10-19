const express = require('express');
const cors = require('cors');
const menu = require('./data/menu.json');
const sections = require('./data/sections.json');
const items = require('./data/items.json');

const app = express();
app.use(cors());

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

app.get('/api/menu', cors(corsOptions), (req, res) => {
  setTimeout(() => {
    res.json(menu);
  }, 300);
});

app.get('/api/sections', (req, res) => {
  setTimeout(() => {
    res.json(sections);
  }, 300);
});

app.get('/api/items', (req, res) => {
  setTimeout(() => {
    res.json(items);
  }, 800);
});

app.listen(3001, () => {
  console.log('API server running on localhost:3001');
});
