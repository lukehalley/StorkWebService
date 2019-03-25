const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const deviceSchema = mongoose.Schema({
  stork_code: { type: String, required: true },
  available: { type: String, required: true },
  ownerId: { type: String, required: false }
});

deviceSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Device', deviceSchema);
