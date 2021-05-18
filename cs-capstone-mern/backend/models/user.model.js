const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema for user model. Single field username
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

// Defines and exports schema for users
const User = mongoose.model('User', userSchema);

module.exports = User;