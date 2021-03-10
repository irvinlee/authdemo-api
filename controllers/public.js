const publicInfo = require('../fixtures/PublicInfo');

exports.getPublicInfo = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: {
      publicInfo,
    },
  });

  next();
};
