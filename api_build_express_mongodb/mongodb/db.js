var chalk = require('chalk');
var config = require('../config');
var mongoose = require('mongoose');

mongoose.connect(config.dbUrl, { useMongoClient: true });
mongoose.Promise = global.Promise;

db = mongoose.connection;

db.once('open', function() {
  console.log(chalk.green('Connect mongodb database success!'));
});

db.on('error', function(err) {
  console.error(chalk.red('Error in mongodb connection: ' + error));
});

db.on('close', function() {
  console.log(chalk.red('mongodb connect close, reconnect...'));
  mongoose.connect(config.dbUrl, { server: { auto_reconnect: true } });
});

module.exports = db;
