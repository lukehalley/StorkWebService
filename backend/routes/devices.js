const express = require('express');
const router = express.Router();

const DeviceController = require('../controllers/devices');

// These routes could be secured using tokens to ensure
// only admins can get devices.

// Get list of registerable devices.
router.get(
  '/admin/available-devices',
  DeviceController.getRegistrableStorkDevices
);

module.exports = router;
