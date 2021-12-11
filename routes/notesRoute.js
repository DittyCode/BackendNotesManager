const express = require('express');
const {
	getAllNotes,
	createNewNote,
	getSingleNote,
} = require('./../controllers/notesController');

const router = express.Router();

router.route('/').get(getAllNotes).post(createNewNote);

router.route('/:id').get(getSingleNote);

module.exports = router;
