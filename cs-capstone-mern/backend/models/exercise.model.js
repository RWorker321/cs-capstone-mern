const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema for exercises. Four fields including username and description of string type, duration of number type, and date of date type
const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

// Defines and exports schema for exercise schema
const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;