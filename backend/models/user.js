const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  fname: { type: String, required: true, unique: false },
  sname: { type: String, required: true, unique: false },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  plan: { type: String, default: 'free' }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
