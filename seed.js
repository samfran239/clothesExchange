const db = require('./server/models/db');
const User = require('./server/models/users');
const Clothes = require('./server/models/clothes');

const users = [
	{
		name: 'Samantha Francis',
		email: 'sam@samFran.com',
		userPhoto: 'REPLACE'
	},
	{
		name: 'Regina Hall',
		email: 'regina@Hall.com',
		userPhoto: 'REPLACE'
	},
	{
		name: 'Betty White',
		email: 'betty@White.com',
		userPhoto: 'REPLACE'
	}
];

const clothes = [
	{
		itemName: 'Bunny Blouse',
		itemColor: 'Red and White',
		itemDescription: 'Lovely blouse with frills to give th guys thrills',
		itemPhoto: 'REPLACE'
	},
	{
		itemName: 'Giraffe Pants',
		itemColor: 'Yellow and Black',
		itemDescription: 'Lengthen those legs with these palooza pants',
		itemPhoto: 'REPLACE'
	},
	{
		itemName: 'Elephant Undies',
		itemColor: 'Grey',
		itemDescription: 'Doesnt have any elephants on them ',
		itemPhoto: 'REPLACE'
	}
];

const seed = () =>
	Promise.all(users.map((user) => User.create(user))).then(() =>
		Promise.all(clothes.map((item) => Clothes.create(item)))
	);
// .then(() => Promise.all(messages.map((message) => Message.create(message))));

const main = () => {
	console.log('Syncing db...');
	db
		.sync({ force: true })
		.then(() => {
			console.log('Seeding databse...');
			return seed();
		})
		.catch((err) => {
			console.log('Error while seeding');
			console.log(err.stack);
		})
		.then(() => {
			db.close();
			return null;
		});
};

main();
