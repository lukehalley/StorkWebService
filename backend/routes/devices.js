const express = require('express');
const router = express.Router();

const DeviceController = require('../controllers/devices');

// These routes could be secured using tokens to ensure
// only admins can get devices.

// Get list of registerable devices.
router.get(
  '/admin/available-device/:stork_code',
  DeviceController.getRegistrableStorkDevice
);

// Create a User and send it to the database
// to be stored.
router.post(
  '/admin/available-device/add',
  DeviceController.addRegistrableStorkDevice
);

// Push data from a Stork device.
router.put(
  '/admin/available-device/update/:stork_code',
  DeviceController.associateUser
);

// Delete ONE Stork from the database and return them in the response
router.delete(
  '/admin/available-device/delete/:stork_code',
  DeviceController.dissociateUser
);

module.exports = router;
