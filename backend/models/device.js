const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const deviceSchema = mongoose.Schema({
  stork_code: { type: String, required: true },
  available: { type: Boolean, required: true },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  }
});

deviceSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Device', deviceSchema);
