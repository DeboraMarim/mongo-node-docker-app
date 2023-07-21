const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

mongoose.connect('mongodb://mongo:27017/mydatabase', {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
