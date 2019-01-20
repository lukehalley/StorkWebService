const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// fJbl1AKYzO57WzAs

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
  const storks = req.body;
  console.log(storks);
  // 200 = Success & Something Was Created
  res.status(201).json({
    message: 'Stork added sucessfully!'
  });
});

app.use('/api/storks', (req, res, next) => {
  const storks = [
    { id: 'sdfsdfs', stork_code: 'STR0001', nickname: 'MonaLisa' },
    { id: 'edfsdfs', stork_code: 'STR0002', nickname: 'LukesStork' },
    { id: 'kfgnskd', stork_code: 'STR0003', nickname: 'GwynnsStork' }
  ];
  // 200 = Success
  res.status(200).json({
    message: 'Storks fetched sucessfully',
    storks: storks
  });
});

module.exports = app;
