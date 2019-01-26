const express = require('express');
const User = require('../models/user.js');
const router = express.Router();
const bcrypt = require('bcrypt');

// Create a User and send it to the database
// to be stored
router.post('/signup', (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hashedPassword => {
    const user = new User({
      fname: req.body.fname,
      sname: req.body.sname,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      plan: req.body.plan
    });
    console.log(user);
    user
      .save()
      .then(createdUser => {
        // 201 = Success & Something Was Created
        res.status(201).json({
          message: 'User added sucessfully!',
          userId: createdUser._id
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
});

module.exports = router;
