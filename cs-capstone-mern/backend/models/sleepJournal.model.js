const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define a schema representing sleep journal and validation rules
const sleepJournalSchema = new Schema({
  username: 
  { type: String, required: true, unique: true, minLength: 3, maxLength: 10 }, // username must be unique and required for each user
  description: { type: String, required: true, maxLength: 100 },
  duration: { type: Number, required: true, minumum: 0, maximum: 24 }, 
  date: { type: Date, default: Date.now}, // Defaults to current date if no date selected. 
}, {
  timestamps: true,
});

// Defines and exports schema for sleep journal schema
const SleepJournal = mongoose.model('Sleep Journal', sleepJournalSchema);

module.exports = SleepJournal;