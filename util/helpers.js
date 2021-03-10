const find = require('lodash').find;

// returns the specified URL with the base URL prepended to it
exports.getFullUrl = (url, apiVersion = 1) =>
  `${process.env.BASE_URL}/v${apiVersion}/${url}`;

// finds the user by email.. normally, we would be doing this in the DB
exports.findUser = (userlist, email, password) =>
  find(userlist, (user) => user.email === email && user.password === password);

exports.findUserByEmail = (userlist, email) =>
  find(userlist, (user) => user.email === email);
