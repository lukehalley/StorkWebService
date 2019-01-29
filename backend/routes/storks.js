const express = require('express');
const Stork = require('../models/stork.js');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

// Calling checkAuth to check token to see if current user should
// be able to access all the below routes.

// Create a Stork device and send it to the database to be stored.
router.post('', checkAuth, (req, res, next) => {
  const stork = new Stork({
    stork_code: req.body.stork_code,
    nickname: req.body.nickname,
    ownerId: req.userData.userId
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

// Update a Stork device and update it in the database.
router.put('/:id', checkAuth, (req, res, next) => {
  const stork = new Stork({
    _id: req.body.id,
    stork_code: req.body.stork_code,
    nickname: req.body.nickname
  });
  Stork.updateOne(
    { _id: req.params.id, ownerId: req.userData.userId },
    stork
  ).then(result => {
    // If nModified is greater than one on the result that means a field was edited.
    // Using nModified to check if a user owns the Stork.
    if (result.nModified > 0) {
      res.status(200).json({ message: 'Update successful!' });
    } else {
      res
        .status(401)
        .json({ message: 'User Not Authorised To Edit This Stork!' });
    }
  });
});

// Get ALL Storks from the database and return them in the response
router.get('', checkAuth, (req, res, next) => {
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

router.get('/:id', checkAuth, (req, res, next) => {
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

router.delete('/:id', checkAuth, (req, res, next) => {
  Stork.deleteOne({ _id: req.params.id, ownerId: req.userData.userId })
    .then(result => {
      console.log('Result: ' + result);
      if (result.nModified > 0) {
        res.status(200).json({ message: 'Stork Deleted!' });
      } else {
        res
          .status(401)
          .json({ message: 'User Not Authorised To Delete This Stork!' });
      }
    })
    .catch(e => {
      console.error('Failed To Delete A Document From Database!: ');
      console.error(e);
    });
});

module.exports = router;
