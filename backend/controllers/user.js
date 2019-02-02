const express = require('express');
const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

exports.createUser = (req, res, next) => {
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
          message: 'User Added Sucessfully!',
          result: createdUser
        });
      })
      .catch(err => {
        console.log('Error: ' + err);
        res.status(500).json({
          message: 'Sign Up Unsuccessful!',
          comment:
            'Please check you have correctly filled all fields. If you already have an account, Sign In',
          error: err
        });
      });
  });
};

exports.loginUser = (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: 'Login Unsuccessful!',
          comment:
            'Please check you have entered your credentials correctly and try again.'
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: 'Login Unsuccessful!',
          comment:
            'Please check you have entered your credentials correctly and try again.'
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        process.env.JWY_KEY,
        { expiresIn: '1h' }
      );
      res.status(200).json({
        token: token,
        // Sending the client the time duration of their token - 1 hour in seconds:
        expiresIn: 3600,
        userId: fetchedUser._id
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: 'Login Unsuccessful!',
        comment:
          'Please check you have entered your credentials correctly and try again.'
      });
    });
};
