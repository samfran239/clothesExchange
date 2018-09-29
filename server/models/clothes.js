'use strict';
const Sequelize = require('sequelize');
const db = require('./db');

const Clothes = db.define('clothes', {
	itemName: Sequelize.STRING,
	itemColor: Sequelize.STRING,
	itemDescription: Sequelize.TEXT,
	itemPhoto: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

module.exports = Clothes;
