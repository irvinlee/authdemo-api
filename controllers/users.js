const users = require('../fixtures/Users');

exports.getUsers = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: {
      users: users.map((user) => user.email),
    },
  });

  next();
};
