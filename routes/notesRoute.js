const express = require('express');
const {
	getAllNotes,
	createNewNote,
	getSingleNote,
	updateNote,
	deleteNote,
} = require('./../controllers/notesController');

const router = express.Router();

router.route('/').get(getAllNotes).post(createNewNote);

router.route('/:id').get(getSingleNote).patch(updateNote).delete(deleteNote);

module.exports = router;
