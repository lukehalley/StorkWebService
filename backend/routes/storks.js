const express = require('express');
const Stork = require('../models/stork.js');
const router = express.Router();

// Create a Stork device and send it to the database
// to be stored
router.post('', (req, res, next) => {
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

// Create a Stork device and send it to the database
// to be stored
router.put('/:id', (req, res, next) => {
  const stork = new Stork({
    _id: req.body.id,
    stork_code: req.body.stork_code,
    nickname: req.body.nickname
  });
  Stork.updateOne({ _id: req.params.id }, stork).then(result => {
    console.log(result);
    res.status(200).json({ message: 'Update successful!' });
  });
});

// Get ALL Storks from the database and return them in the response
router.get('', (req, res, next) => {
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

router.get('/:id', (req, res, next) => {
  Stork.findById({ _id: req.params.id })
    .then(stork => {
      if (stork) {
        res.status(200).json(stork);
      } else {
        res.status(404).json({ message: 'Stork Not Found!' });
      }
    })
    .catch(e => {
      console.error('Failed To Delete A Document From Database!: ');
      console.error(e);
    });
});

router.delete('/:id', (req, res, next) => {
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

module.exports = router;
