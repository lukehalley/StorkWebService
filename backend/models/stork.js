const mongoose = require('mongoose');

const storkSchema = mongoose.Schema({
  stork_code: { type: String, required: true },
  owner_id: { type: String, required: true },
  // Linking each Stork to a User using Mongoose:
  nickname: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Stork', storkSchema);
