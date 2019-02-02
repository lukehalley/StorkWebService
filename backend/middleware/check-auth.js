const jwt = require('jsonwebtoken');
const key =
  'AfwSq-jPWPN&9$nRn5QyEpRtkGaH#nNuhfmAyfKm%_8WV*_aFrgKupcAzpQUuY2@5yMYbX*mBC9@78A$+snt!!gV62F8RfwJ8==8!3Tv5PhftAT48R5LnFj^eFe*S_cJ_Tj9mEgq!NuMTy_!z=P7vxp8^JTm?Krjc$Dsvyt39DqeH?T8y_MvVd&+TWHuG=EMV^2d&rPuva^_ULVu6Cqes=SXaZMk?^^aWD&hwcYP3B36HpZpEUGBR5e%&sH7+BR8';

// Middleware to check if the user is allowed access a route.
module.exports = (req, res, next) => {
  // Trying to look into the headers to get the token.
  //
  // Splitting the header by its whitespace to get:
  // <Bearer> & <token> -> [1] is the token.
  try {
    // Got a token
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, key);
    req.userData = {
      email: decodedToken.email,
      userId: decodedToken.userId
    };
    // If the verify works we know its a valid token else it will fail
    // and go into the cathc block.
    next();
  } catch (error) {
    // Token not available
    res
      .status(401)
      .json({ message: 'Login Failed! - no token available or invalid!' });
  }
};
