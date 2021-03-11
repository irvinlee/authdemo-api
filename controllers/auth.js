const users = require('../fixtures/Users');
const jwt = require('jsonwebtoken');
const findUser = require('../util/helpers').findUser;

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  const userData = findUser(users, email, password);

  if (!!userData) {
    const { password, ...user } = userData;

    res.status(200).json({
      success: true,
      data: {
        jwt_token: jwt.sign({ email }, process.env.JWT_SECRET_CODE, {
          expiresIn: process.env.JWT_EXPIRE,
        }),
      },
      user,
    });
  } else {
    res
      .status(200)
      .json({ success: false, message: 'Invalid username or password' });
  }

  next();
};
