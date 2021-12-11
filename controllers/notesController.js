const Note = require('./../models/notes');

// @route /api/v1/notes
// @desc Get all notes

const getAllNotes = async (req, res) => {
	try {
		const notes = await Note.find({});
		res.status(200).send({
			message: 'All notes',
			data: {
				notes,
			},
		});
	} catch (err) {
		res.status(400).send({ message: 'Error', err });
	}
};

const createNewNote = async (req, res) => {
	try {
		const newNote = await Note.create(req.body);
		res.status(200).send({
			message: 'Create new note',
			status: 'success',
			data: {
				newNote,
			},
		});
	} catch (err) {
		res.status(400).send({ message: 'Error', err });
	}
};

module.exports = {
	getAllNotes,
	createNewNote,
};
