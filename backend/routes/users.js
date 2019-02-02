const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');

// These routes will not be secured using tokens as any users should
// be able to sign up and login.

// Create a User and send it to the database
// to be stored.
router.post('/signup', UserController.createUser);

// Login a User allow them to access
// their profile.
router.post('/login', UserController.loginUser);

module.exports = router;
