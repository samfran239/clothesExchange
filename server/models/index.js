const db = require('./db');

const User = require('./users');
const Clothes = require('./clothes');

Clothes.belongsTo(User);
User.hasMany(Clothes, { as: 'item' });

module.exports = {
	db,
	User,
	Clothes
};
