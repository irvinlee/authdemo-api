const express = require('express');
const router = express.Router();
const protected = require('../middleware/auth').protected;
const { getUsers } = require('../controllers/users');

router.route('/').get(protected, getUsers);

module.exports = router;
