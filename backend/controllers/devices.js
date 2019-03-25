const Device = require('../models/device.js');

// Get ALL Storks belong to a User from the database and return them in the response
// exports.getRegistrableStorkDevices = (req, res, next) => {
//   Device.find({})
//     .then(documents => {
//       // 200 = Success
//       res.status(200).json({
//         message: 'Registrable Storks Fetched Sucessfully',
//         devices: documents
//       });
//     })
//     .catch(e => {
//       res.status(500).json({
//         message: 'Registrable Storks Retrival Failed!',
//         comment: 'Failed To Get The Registrable Storks From The Database!',
//         error: err
//       });
//     });
// };

// Get ONE Stork from the database and return them in the response
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
