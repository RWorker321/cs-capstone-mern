const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema for user model. Single field username
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  },
    firstname: { type: String, required: false},
    lastname: { type: String, required: false},
    age: { type: Number, required: true }
}, {
  timestamps: true,
});

// Defines and exports schema for users
const User = mongoose.model('User', userSchema);

module.exports = User;