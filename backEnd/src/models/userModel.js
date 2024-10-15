const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: {type: String},
  role: { type: String, enum:['admin', 'supadmin', 'subscriber'], default: 'subscriber' }
});

module.exports = mongoose.model('User', userSchema);