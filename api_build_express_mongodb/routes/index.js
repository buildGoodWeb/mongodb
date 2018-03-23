var bears = require('./bears');
var config = require('../config');

var api = config.api;

module.exports = function(app) {
  app.use(api + '/bears', bears);
};
