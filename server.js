require('dotenv').config({ path: './config.env' });

const express = require('express');
const morgan = require('morgan');
const noteRoute = require('./routes/notesRoute');
const db = require('./db/connect');
const app = express();

app.use(express.json());

if (process.env.MODE === 'DEVELOPMENT') {
	app.use(morgan('dev'));
}

app.use('/api/v1/notes', noteRoute);

const PORT = process.env.SERVER_PORT || 3000;

const initServer = async () => {
	try {
		app.listen(PORT, () => {
			console.log(`Server is listening at port : ${PORT}`);
		});
		await db();
	} catch (err) {
		return err;
	}
};

initServer();
