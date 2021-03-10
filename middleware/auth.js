const _get = require('lodash').get;
const jwt = require('jsonwebtoken');
const findUserByEmail = require('../util/helpers').findUserByEmail;
const users = require('../fixtures/Users');

exports.protected = (req, res, next) => {
  const bearerToken = _get(req, 'headers.authorization', '');
  const denyAccessResponse = () => {
    res.status(401).json({
      success: false,
      message: 'User not unauthorized to access this endpoint',
    });
  };

  if (bearerToken.startsWith('Bearer')) {
    const token = bearerToken.split(' ')[1];
    try {
      const jwtData = jwt.verify(token, process.env.JWT_SECRET_CODE);
      const user = findUserByEmail(users, _get(jwtData, 'email'));
      if (user) {
        next();
      } else {
        return denyAccessResponse();
      }
    } catch (err) {
      return denyAccessResponse();
    }
  } else {
    return denyAccessResponse();
  }
};
