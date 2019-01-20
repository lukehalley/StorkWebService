const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('One');
  next();
});

app.use((req, res, next) => {
  console.log('Two');
  res.send('Hello from Stork');
});

module.exports = app;
