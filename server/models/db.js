const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/clothesExchange', {
	logging: false
});
const User = require('./users');
const Clothes = require('./clothes');

Clothes.belongsTo(User);
User.hasMany(Clothes, { as: 'item' });

module.exports = db;
