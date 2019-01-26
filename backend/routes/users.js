const express = require('express');
const User = require('../models/user.js');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const key =
  'AfwSq-jPWPN&9$nRn5QyEpRtkGaH#nNuhfmAyfKm%_8WV*_aFrgKupcAzpQUuY2@5yMYbX*mBC9@78A$+snt!!gV62F8RfwJ8==8!3Tv5PhftAT48R5LnFj^eFe*S_cJ_Tj9mEgq!NuMTy_!z=P7vxp8^JTm?Krjc$Dsvyt39DqeH?T8y_MvVd&+TWHuG=EMV^2d&rPuva^_ULVu6Cqes=SXaZMk?^^aWD&hwcYP3B36HpZpEUGBR5e%&sH7+BR8';

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
    user
      .save()
      .then(createdUser => {
        // 201 = Success & Something Was Created
        res.status(201).json({
          message: 'User added sucessfully!',
          result: createdUser
        });
      })
      .catch(err => {
        console.log('Error: ' + err);
        res.status(500).json({
          message: 'User added unsucessfully!',
          error: err
        });
      });
  });
});

// Create a User and send it to the database
// to be stored
router.post('/login', (req, res, next) => {
  let fetchedUser;
  // Checking if the user exists with the email
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        console.log('In not bcrypt');
        // User does not exist
        return res.status(401).json({
          message: 'Authentication failed, user not found!'
        });
      } else {
        fetchedUser = user;
        console.log('In bcrypt');
        // User found!
        //
        // Checking if the password entered by the user matches
        // the password in the database using bcrypt.
        return bcrypt.compare(req.body.password, user.password);
      }
    })
    .catch(err => {
      console.log(err);
      // User does not exist
      return res.status(401).json({
        message: 'Authentication failed'
      });
    })
    .then(result => {
      console.log('RESULT: ' + result);
      if (!result) {
        return res.status(401).json({
          message: 'Authentication failed!'
        });
      } else {
        // Authentication has been successful, create a token.
        const token = jwt.sign(
          { email: fetchedUser.email, userId: fetchedUser._id },
          key,
          {
            expiresIn: '1h'
          }
        );
        res.status(200).json({
          token: token
        });
      }
    })
    .catch(err => {
      console.log('boom');
      // User does not exist
      return res.status(401).json({
        message: 'Authentication failed'
      });
    });
});

module.exports = router;
