require('dotenv').config({ path: './config.env' });

const express = require('express');
const morgan = require('morgan');
const noteRoute = require('./routes/notesRoute');
const app = express();

if (process.env.MODE === 'DEVELOPMENT') {
	app.use(morgan('dev'));
}

app.use('/api/v1/notes', noteRoute);

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is listening at port : ${PORT}`);
});
