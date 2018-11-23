let settings = require('../../config/settings');

module.exports = function (req, res, next) {
  res.sendFile(settings.path + '/public/index.html');
};
