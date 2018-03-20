var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
  name: String
});

BearSchema.index({id: 1});

module.exports = mongoose.model('Bear', BearSchema);
