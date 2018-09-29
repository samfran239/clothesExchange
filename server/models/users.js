'use strict';
const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
	name: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true
		}
	},
	email: {
		type: Sequelize.STRING,
		validate: {
			isEmail: true,
			notEmpty: true
		}
	},
	userPhoto: {
		type: Sequelize.STRING,
		defaultValue: '' //PUT IN IMGURL!!
	}
});

module.exports = User;
