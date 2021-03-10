const express = require('express');
const router = express.Router();
const { getPublicInfo } = require('../controllers/public');

router.route('/').get(getPublicInfo);

module.exports = router;
