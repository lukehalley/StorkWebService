const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const storkRoutes = require('./routes/storks');
const userRoutes = require('./routes/users');
const deviceRoutes = require('./routes/devices');
const dotenv = require('dotenv');
dotenv.config();

// Connecting to the Mongodb database
mongoose
  .connect('mongodb://database:27017/' + process.env.MONGO_DATABASE)
  .then(() => {
    console.log('Connected to ' + process.env.MONGO_DATABASE + ' Database!');
  })
  .catch(e => {
    console.log('Connection Failed Database! ' + e);
  });

app.use(bodyParser.json());

// Set headers to allow access to the api routes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

// Filter all routes going to /api/storks to use storkRoutes.
app.use('/api/storks', storkRoutes);

// Filter all routes going to /api/users to use userRoutes.
app.use('/api/users', userRoutes);

// Filter all routes going to /api/users to use deviceRoutes.
app.use('/api/devices', deviceRoutes);

module.exports = app;
