var config, logger

logger = require('logmimosa');

config = require('./config');

module.exports = function(mimosaConfig) {
  if (mimosaConfig.frontend == null)
    mimosaConfig.concat(config.defaults())

  return function(req, res, next) {
    res.frontend = mimosaConfig.frontend
    next()
  };
};
