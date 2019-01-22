const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const Stork = require('./models/stork.js');

mongoose
  .connect(
    'mongodb+srv://lhalley:vfk6er5NOoVTmWxY@stork-owrd7.mongodb.net/storks?retryWrites=true'
  )
  .then(() => {
    console.log('Connected to Database!');
  })
  .catch(e => {
    console.error('Connection Failed Database!');
    console.log(e);
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, PUT, OPTIONS'
  );
  next();
});

app.post('/api/storks', (req, res, next) => {
  const stork = new Stork({
    stork_code: req.body.stork_code,
    nickname: req.body.nickname
  });
  console.log(stork);
  stork.save();
  // 201 = Success & Something Was Created
  res.status(201).json({
    message: 'Stork added sucessfully!'
  });
});

app.get('/api/storks', (req, res, next) => {
  Stork.find()
    .then(documents => {
      console.log('Found: ' + documents);
    })
    .catch(e => {
      console.error('Failed To Get ALL Documents From Database!');
      console.error(e);
    });
  const storks = [];
  // 200 = Success
  res.status(200).json({
    message: 'Storks fetched sucessfully',
    storks: storks
  });
});

module.exports = app;
