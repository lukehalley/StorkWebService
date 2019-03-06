const Stork = require('../models/stork.js');

// Create a Stork device and send it to the database to be stored.
exports.createStork = (req, res, next) => {
  const stork = new Stork({
    stork_code: req.body.stork_code,
    nickname: req.body.nickname,
    ownerId: req.userData.userId,
    location: {
      type: 'Point',
      coordinates: [333.34, 45.35]
    }
  });
  console.log(stork);
  stork
    .save()
    .then(createdStork => {
      // 201 = Success & Something Was Created
      res.status(201).json({
        message: 'Stork added sucessfully!',
        storkId: createdStork._id
      });
    })
    .catch(e => {
      console.error(e)
      res.status(500).json({
        message: 'Stork Registration Failed!',
        comment: 'Please check you have correctly filled all fields.',
        error: e
      });
    });
};

// Get ALL Storks from the database and return them in the response
exports.getUserStorks = (req, res, next) => {
  Stork.find({ ownerId: req.params.ownerId })
    .then(documents => {
      // 200 = Success
      res.status(200).json({
        message: 'Storks Fetched Sucessfully',
        storks: documents
      });
    })
    .catch(e => {
      res.status(500).json({
        message: 'Stork Retrival Failed!',
        comment: 'Failed To Get Your Storks From The Database!',
        error: err
      });
    });
};

// Get ONE Stork from the database and return them in the response
exports.getOneStork = (req, res, next) => {
  Stork.findById({ _id: req.params.id })
    .then(stork => {
      console.log('GETTING STORK WITH ID OF: ' + req.params.id);
      if (stork) {
        res.status(200).json(stork);
        console.log("Got this stork back after getOneStork: " + stork)
      } else {
        res.status(404).json({ message: 'Stork Not Found!' });
      }
    })
    .catch(e => {
      console.error(e)
      res.status(500).json({
        message: 'Stork Retrival Failed!',
        comment: 'Failed To Get A Document From Database!',
        error: e
      });
    });
};

// Update a Stork device and update it in the database.
exports.updateStork = (req, res, next) => {
  const stork = new Stork({
    _id: req.body.id,
    stork_code: req.body.stork_code,
    nickname: req.body.nickname,
    location: req.body.location
  });
  Stork.updateOne(
    { _id: req.params.id, ownerId: req.userData.userId },
    stork
  ).then(result => {
    // If nModified is greater than one on the result that means a field was edited.
    // Using nModified to check if a user owns the Stork.
    if (result.n > 0) {
      res.status(200).json({ message: 'Update successful!' });
    } else {
      res
        .status(401)
        .json({
          message: 'User Not Authorised To Edit This Stork!',
          comment: 'Please Sign In to edit your Storks'
        })
        .catch(e => {
          res.status(500).json({
            message: 'Stork Update Failed!',
            comment: 'Please check you have correctly filled all fields.',
            error: err
          });
        });
    }
  });
};

// Delete ONE Stork from the database and return them in the response
exports.deleteAStork = (req, res, next) => {
  Stork.deleteOne({ _id: req.params.id, ownerId: req.userData.userId })
    .then(result => {
      if (result.n > 0) {
        res.status(200).json({ message: 'Stork Deleted!' });
      } else {
        res
          .status(401)
          .json({ message: 'User Not Authorised To Delete This Stork!' });
      }
    })
    .catch(e => {
      res.status(500).json({
        message: 'Stork De-registration Failed!',
        comment: 'Failed To De-registrater Your Storks!',
        error: err
      });
    });
};
