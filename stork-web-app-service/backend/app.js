const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const Stork = require('./models/stork.js');

// Connecting to the Mongodb database
mongoose
  .connect(
    // Connections string
    // TODO: Remove password
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

// Set headers to allow access to the api routes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

// Create a Stork device and send it to the database
// to be stored
app.post('/api/storks', (req, res, next) => {
  const stork = new Stork({
    stork_code: req.body.stork_code,
    nickname: req.body.nickname
  });
  console.log(stork);
  stork.save().then(createdStork => {
    // 201 = Success & Something Was Created
    res.status(201).json({
      message: 'Stork added sucessfully!',
      storkId: createdStork._id
    });
  });
});

// Get ALL Storks from the database and return them in the response
app.get('/api/storks', (req, res, next) => {
  Stork.find()
    .then(documents => {
      console.log('Found: ' + documents);
      // 200 = Success
      res.status(200).json({
        message: 'Storks fetched sucessfully',
        storks: documents
      });
    })
    .catch(e => {
      console.error('Failed To Get ALL Documents From Database!');
      console.error(e);
    });
});

app.delete('/api/storks/:id', (req, res, next) => {
  Stork.deleteOne({ _id: req.params.id })
    .then(result => {
      console.log('Result: ' + result);
      res.status(200).json({ message: 'Stork Deleted!' });
    })
    .catch(e => {
      console.error('Failed To Delete A Document From Database!: ');
      console.error(e);
    });
});

module.exports = app;
