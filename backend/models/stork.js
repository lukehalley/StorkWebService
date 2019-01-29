const mongoose = require('mongoose');

const storkSchema = mongoose.Schema({
  stork_code: { type: String, required: true },
  nickname: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Stork', storkSchema);
