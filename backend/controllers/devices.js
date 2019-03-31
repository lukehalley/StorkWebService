const Device = require('../models/device.js');

// Add a Stork device to allow it to be registered by a user.
// This route should only be used by an admin.
exports.addRegistrableStorkDevice = (req, res, next) => {
  const regDevice = new Device({
    stork_code: req.body.stork_code,
    available: req.body.available,
    ownerId: null
  });
  regDevice
    .save()
    .then(createdDevice => {
      // 201 = Success & Something Was Created
      res.status(201).json({
        message: 'Device Now Available For Registration!',
        result: createdDevice
      });
    })
    .catch(err => {
      console.log('Error: ' + err);
      res.status(500).json({
        message: 'Device Add For Registration Unsuccessful!',
        comment: 'Please check you have correctly filled all fields.',
        error: err
      });
    });
};

// Get one Stork Device from the database and return them in the response. This is used
// for when a user wants to register their device to ensure the device is available.
exports.getRegistrableStorkDevice = (req, res, next) => {
  Device.findOne({ stork_code: req.params.stork_code })
    .then(stork => {
      console.log('GETTING STORK WITH STORK CODE OF: ' + req.params.stork_code);
      if (stork) {
        res.status(200).json(stork);
        console.log(
          'Got this stork back after getting with Stork Code: ' + stork
        );
      } else {
        res.status(404).json({
          message: 'Invalid Stork Code Entered',
          comment: 'Device With The Entered Stork Code Cannot Be Found!'
        });
      }
    })
    .catch(e => {
      console.error(e);
      res.status(500).json({
        message: 'Stork Retrival Failed!',
        comment: 'Failed To Get A Document From Database!',
        error: e
      });
    });
};

// Associate a User after they registered a Stork device to their account successfully
exports.associateUser = (req, res, next) => {
  Device.findOneAndUpdate(
    { stork_code: req.params.stork_code },
    {
      $set: {
        stork_code: req.params.stork_code,
        available: req.body.available,
        statusCode: req.body.statusCode,
        ownerId: req.body.ownerId
      }
    },
    { upsert: true },
    (err, doc) => {
      if (err) {
        console.log('Error: ' + err);
        res.status(500).json({
          message: 'Device association with user unsuccessful!',
          comment: 'Please check you have correctly filled all fields.',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Device Associated with sucessfully!',
          stork: doc
        });
      }
    }
  );
};

// Delete ONE Device from the database and return them in the response
exports.dissociateUser = (req, res, next) => {
  Device.deleteOne({ stork_code: req.params.stork_code })
    .then(result => {
      if (result.n > 0) {
        res.status(200).json({ message: 'Device dissociation successful!' });
      } else {
        res
          .status(401)
          .json({ message: 'Not Authorised To Delete This Stork!' });
      }
    })
    .catch(e => {
      console.log('Error: ' + err);
      res.status(500).json({
        message: 'Device dissociation with user unsuccessful!',
        comment: 'Please check you have correctly filled all fields.',
        error: err
      });
    });
};
