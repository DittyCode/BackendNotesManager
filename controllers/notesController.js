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
		res.status(400).send({ message: 'Error', status: 'failed', err });
	}
};

// @route /api/v1/notes/:id
// @desc Get single note
// @param ID -> mongoose ID document

const getSingleNote = async (req, res) => {
	try {
		const { id } = req.params;
		const note = await Note.findById(id);
		res.status(200).send({
			message: 'Get single note',
			status: 'success',
			data: {
				note,
			},
		});
	} catch (err) {
		res.status(400).send({ message: 'Error', status: 'failed', err });
	}
};

// @route /api/v1/notes
// @desc Create new note
// @param Body => Name,Complete,Date {Name is required}

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
		res.status(400).send({ message: 'Error', status: 'failed', err });
	}
};

// @route /api/v1/notes/:id
// @desc Update note
// @param ID -> mongoose ID document
// @param Body -> Name,Complete,Date to update field in document

const updateNote = async (req, res) => {
	try {
		const { id } = req.params;
		const updatedNote = await Note.findByIdAndUpdate(id, req.body, {
			new: true,
			runValidator: true,
		});
		res.status(200).send({
			message: 'Update note',
			status: 'success',
			data: {
				updatedNote,
			},
		});
	} catch (err) {
		res.status(400).send({ message: 'Error', status: 'failed', err });
	}
};

// @route /api/v1/notes/:id
// @desc Delete note
// @param ID -> mongoose ID document

const deleteNote = async (req, res) => {
	try {
		const { id } = req.params;
		const deletedNote = await Note.findByIdAndDelete(id);
		res.status(200).send({
			message: 'Delete note',
			status: 'success',
			data: {
				deletedNote,
			},
		});
	} catch (err) {
		res.status(400).send({ message: 'Error', status: 'failed', err });
	}
};

module.exports = {
	getAllNotes,
	createNewNote,
	getSingleNote,
	updateNote,
	deleteNote,
};
