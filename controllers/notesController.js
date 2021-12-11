const getAllNotes = async (req, res) => {
	res.send({ message: 'All notes' });
};

module.exports = {
	getAllNotes,
};
