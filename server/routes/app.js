const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { db, Users, Clothes } = require('../models');
const userRoute = require('./userRoutes');
const clothingRoute = require('./clothingRoutes');
const app = express();
const PORT = 3000;

// Logging middleware
app.use(morgan('dev'));

// Body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/users', userRoute());
app.use('/clothes', clothingRoute());

app.get('/*', (req, res, next) => {
	res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Handle 404s
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Error handling endware
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.send(err.message || 'Internal server error');
});

const init = () => {
	db.sync().then(() => {
		console.log('The database is synced!');
		app.listen(PORT, () =>
			console.log(`

      Listening on port ${PORT}
      http://localhost:3000/

    `)
		);
	});
};
init();
