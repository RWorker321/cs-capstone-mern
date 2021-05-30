const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define a schema representing sleep journal and validation rules
const sleepJournalSchema = new Schema({
  username: 
  { type: String, required: true, unique: false, minLength: 3, maxLength: 10 },
  description: { type: String, required: true, maxLength: 100 },
  duration: { type: Number, required: true, minumum: 6, maximum: 12 }, // User Should aim for minumum of 6 hours and max 12 hours sleep
  date: { type: Date, default: Date.now}, // Defaults to current date if no date selected
}, {
  timestamps: true,
});

// Defines and exports schema for sleep journal schema
const SleepJournal = mongoose.model('Sleep Journal', sleepJournalSchema);

module.exports = SleepJournal;