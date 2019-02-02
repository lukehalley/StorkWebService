const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Middleware to check if the user is allowed access a route.
module.exports = (req, res, next) => {
  // Trying to look into the headers to get the token.
  //
  // Splitting the header by its whitespace to get:
  // <Bearer> & <token> -> [1] is the token.
  try {
    // Got a token
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWY_KEY);
    req.userData = {
      email: decodedToken.email,
      userId: decodedToken.userId
    };
    // If the verify works we know its a valid token else it will fail
    // and go into the cathc block.
    next();
  } catch (error) {
    // Token not available
    res.status(401).json({ message: 'Your are not authorised, please Login!' });
  }
};
