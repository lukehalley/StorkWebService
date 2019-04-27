const express = require('express');
const router = express.Router();

const DeviceController = require('../controllers/devices');

// These routes could be secured using tokens to ensure
// only admins can get devices.

// Get list of registerable devices.
router.get(
  '/admin/available-device/:dev_code',
  DeviceController.getRegistrableStorkDevice
);

// Add a registerable device to allow a user to register the it.
router.post(
  '/admin/available-device/add',
  DeviceController.addRegistrableStorkDevice
);

// Associate a user with a Stork device.
router.put(
  '/admin/available-device/update/:dev_code',
  DeviceController.associateUser
);

// Delete one registerable Stork device from the database.
router.delete(
  '/admin/available-device/delete/:dev_code',
  DeviceController.dissociateUser
);

module.exports = router;
