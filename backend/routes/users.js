const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');

// These routes will not be secured using tokens as any users should
// be able to sign up and login.

// Create a Stork user account.
router.post('/signup', UserController.createUser);

// Login a User allow them to access their profile.
router.post('/login', UserController.loginUser);

module.exports = router;
