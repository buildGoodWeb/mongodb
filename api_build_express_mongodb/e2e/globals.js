var os = require('os');
var config = require('../config.js');

var CONSTANTS = {
  PLATFORM: os.platform(),
  APP_HOST: 'localhost',
  APP_PORT: process.env.PORT || config.port,
  SLM_VERSION: '3.9.1',
  SLM_PORT: 4444,
  SLM_HOST: 'localhost',
  LONG_WAIT: 20 * 1000,
};

module.exports = {
  CONSTANTS: CONSTANTS,
}