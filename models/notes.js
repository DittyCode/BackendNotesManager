const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: [true, 'A note name is required'],
	},
	date: {
		type: Date,
		default: new Date(),
	},
	complete: {
		type: Boolean,
		default: false,
	},
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
