const express = require('express');
const {
	getAllNotes,
	createNewNote,
} = require('./../controllers/notesController');

const router = express.Router();

router.route('/').get(getAllNotes).post(createNewNote);

module.exports = router;
