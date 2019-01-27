const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const storkRoutes = require('./routes/storks');
const userRoutes = require('./routes/users');

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

// Filter all routes going to /api/storks to use storkRoutes.
app.use('/api/storks', storkRoutes);

// Filter all routes going to /api/users to use storkRoutes.
app.use('/api/users', userRoutes);

module.exports = app;
