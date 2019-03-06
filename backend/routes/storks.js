const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

// Calling checkAuth to check token to see if current user should
// be able to access all the below routes.

// Getting the routes from the controllers
const StorkController = require("../controllers/storks");

// Create a Stork device and send it to the database to be stored.
router.post("", checkAuth, StorkController.createStork);

// Get ALL Storks from the database and return them in the response
router.get("/:ownerId", checkAuth, StorkController.getUserStorks);

// Get ONE Stork from the database and return them in the response
router.get("/one/:id", checkAuth, StorkController.getOneStork);

// Update a Stork device and update it in the database.
router.put("/:id", checkAuth, StorkController.updateStork);

// Push data from a Stork device.
router.put("/push/:stork_code", StorkController.pushData);

// Delete ONE Stork from the database and return them in the response
router.delete("/:id", checkAuth, StorkController.deleteAStork);

module.exports = router;
