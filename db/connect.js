require('dotenv').config({ path: './../config.env' });

const mongoose = require('mongoose');

const DB = process.env.DB_CONNECT.replace(
	'<PASSWORD>',
	process.env.DB_PASSWORD
);

const initDB = async () => {
	try {
		await mongoose.connect(DB);
		console.log('DB connected succesfully');
	} catch (err) {
		return err;
	}
};

module.exports = initDB;
