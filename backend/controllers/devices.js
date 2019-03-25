const Device = require('../models/device.js');

// Get ALL Storks belong to a User from the database and return them in the response
exports.getRegistrableStorkDevices = (req, res, next) => {
  Device.find({})
    .then(documents => {
      // 200 = Success
      res.status(200).json({
        message: 'Registrable Storks Fetched Sucessfully',
        devices: documents
      });
    })
    .catch(e => {
      res.status(500).json({
        message: 'Registrable Storks Retrival Failed!',
        comment: 'Failed To Get The Registrable Storks From The Database!',
        error: err
      });
    });
};
