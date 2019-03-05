const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

const storkSchema = mongoose.Schema({
  stork_code: { type: String, required: true },
  nickname: { type: String, required: true },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  location: {
    type: pointSchema,
    required: true
  }
});

module.exports = mongoose.model('Stork', storkSchema);
