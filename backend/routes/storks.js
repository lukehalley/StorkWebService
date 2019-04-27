const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

// Calling checkAuth to check token to see if current user should
// be able to access all the below routes.

// Getting the routes from the controllers
const StorkController = require('../controllers/storks');

// Create a registered Stork and send it to the database to be stored.
router.post('', checkAuth, StorkController.createStork);

// Get registered all Storks from the database for a user.
router.get('/:ownerId', checkAuth, StorkController.getUserStorks);

// Get registered one Stork from the database by its id.
router.get('/one/:id', checkAuth, StorkController.getOneStork);

// Update a registered Stork.
router.put('/:id', checkAuth, StorkController.updateStork);

// Push data from a Stork device.
router.put('/push/:stork_code', StorkController.pushData);

// Delete a registered Stork from the database.
router.delete('/:id', checkAuth, StorkController.deleteAStork);

module.exports = router;
