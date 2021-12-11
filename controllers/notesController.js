const Note = require('./../models/notes');

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

module.exports = {
	getAllNotes,
};
