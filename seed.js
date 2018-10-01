const db = require('./server/models/db');
const User = require('./server/models/users');
const Clothes = require('./server/models/clothes');

const users = [
	{
		name: 'Janet Levinson',
		email: 'J.Levinson@dunderMifflin.com',
		userPhoto:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOR-j2iie0AzOwvm-wZy9lSjmu6vQRvb2k0pj32RkfKCoWqX5'
	},
	{
		name: 'Angela Schrute',
		email: 'A.Schrute@DunderMifflin.com',
		userPhoto: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Angela_Martin.jpg/230px-Angela_Martin.jpg'
	},
	{
		name: 'Pam Halpert',
		email: 'P.Halper@DunderMifflin.com',
		userPhoto: 'https://i.gifer.com/2iLt.gif'
	}
];

const clothes = [
	{
		itemName: 'V-Neck Sweater',
		itemColor: 'Red',
		itemDescription: 'Show off those new boobs with this daring yet office appropriate top!',
		itemPhoto:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQir38ifHI7t8TnmEP0Ia6dp_XIG8BcWkL7fpUb0JBuGFZnc8fmlQ',
		userId: 1
	},
	{
		itemName: 'Button-down Blouse',
		itemColor: 'Off White',
		itemDescription: "Show 'em who's boss with this blouse, from The Loft",
		itemPhoto:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTax5qWrlFJMp5XGVyCMABPCCo4fCimmqIijLqcvjHiJYcJ-2XOvw',
		userId: 1
	},
	{
		itemName: 'British Uniform Blazer w/Red Turtleneck',
		itemColor: 'Red, Black, Yellow',
		itemDescription:
			'Stay modest, yet catch the eye of the guy a couple desks over with this enticing blazer-turtleneck combo',
		itemPhoto: 'http://img2.thejournal.ie/inline/4187026/original/?width=620&version=4187026',
		userId: 2
	},
	{
		itemName: 'Sexy Nurse Costume',
		itemColor: 'White, Red',
		itemDescription: "Sometimes it's ok to show a little skin",
		itemPhoto:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjREyi2yaWhY7QkrFeLRkC5VngNhn6xtSFFOEVhuDnOrtiw9m3g',
		userId: 2
	},
	{
		itemName: 'Maternity Dress',
		itemColor: 'Grey',
		itemDescription: 'Work and baby appropriate',
		itemPhoto:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-daxUoU41ES0nRytIE9YpHyd_myX2TDse3rt5uA6LGzq_L5s',
		userId: 3
	},
	{
		itemName: 'Cat Ears',
		itemColor: 'Black',
		itemDescription: 'Just add some face paint and you have your halloween costume',
		itemPhoto:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBA5s8p7BQVCuCZMSdJ1TlVXxrwmT4V-n1ItcYnP8KH5XhsG2',
		userId: 3
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
