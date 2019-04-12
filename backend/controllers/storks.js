const Stork = require('../models/stork.js');

// Create a Stork device and send it to the database to be stored.
exports.createStork = (req, res, next) => {
  const stork = new Stork({
    stork_code: req.body.stork_code,
    lastSeen: req.body.lastseen,
    nickname: req.body.nickname,
    ownerId: req.userData.userId,
    location: {
      type: 'Point',
      coordinates: [null, null]
    },
    statusCode: 0,
    temperature: req.body.temperature,
    humidity: req.body.humidity
  });
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
      if (e.includes('duplicate key error')) {
        res.status(500).json({
          message: 'Stork Already Registered',
          comment: 'The Stork code has already been registered by a user!',
          error: e
        });
      } else {
        res.status(500).json({
          message: 'Stork Registration Failed!',
          comment: 'Please check you have correctly filled all fields.',
          error: e
        });
      }
    });
};

// Get ALL Storks belong to a User from the database and return them in the response
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
      if (stork) {
        res.status(200).json(stork);
      } else {
        res.status(404).json({ message: 'Stork Not Found!' });
      }
    })
    .catch(e => {
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
    lastSeen: req.body.lastseen,
    nickname: req.body.nickname,
    location: req.body.location,
    statusCode: req.body.statusCode,
    temperature: req.body.temperature,
    humidity: req.body.humidity
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

// Push data from a Stork device to its owners device.
exports.pushData = (req, res, next) => {
  const curr = new Date();
  const date =
    curr.getDate() + '/' + (curr.getMonth() + 1) + '/' + curr.getFullYear();
  h = curr.getHours() + 1;
  const time = h + ':' + curr.getMinutes() + ':' + curr.getSeconds();
  const dateTime = time + ' ' + date;
  Stork.findOneAndUpdate(
    { stork_code: req.params.stork_code },
    {
      $set: {
        lastSeen: dateTime,
        'location.type': req.body.location.type,
        'location.coordinates': req.body.location.coordinates,
        statusCode: req.body.statusCode,
        temperature: req.body.temperature,
        humidity: req.body.humidity
      }
    },
    { new: true },
    (err, doc) => {
      if (err) {
        res.status(400).json({
          message: 'Error Pushing Data From Stork',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Stork Updated Sucessfully',
          stork: doc
        });
      }
    }
  );
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
