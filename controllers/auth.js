const users = require('../fixtures/Users');
const jwt = require('jsonwebtoken');
const findUser = require('../util/helpers').findUser;

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  const isValidUser = findUser(users, email, password);

  if (isValidUser) {
    res.status(200).json({
      success: true,
      data: {
        jwt_token: jwt.sign({ email }, process.env.JWT_SECRET_CODE, {
          expiresIn: process.env.JWT_EXPIRE,
        }),
      },
    });
  } else {
    res.status(401).json({ success: false });
  }

  next();
};
