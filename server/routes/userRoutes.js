const router = require('express').Router();
const { User } = require('../models');

// GET find all users
router.get('/', async (req, res, next) => {
	try {
		const allUsers = await User.findAll();
		res.json(allUsers);
	} catch (err) {
		next(err);
	}
});
//GET one user
router.get('/:userId', async (req, res, next) => {
	try {
		console.log('WHAT ARE WE GETTING?', req.params);
		const foundUser = await User.findById(req.params.userId);
		res.json(foundUser);
	} catch (err) {
		next(err);
	}
});
//PUT update one user
router.put('/:userId', async (req, res, next) => {
	try {
		const letsUpdate = await User.findById(req.params.userId);
		const updated = await letsUpdate.update(req.body);
		res.status(200).send(updated);
	} catch (err) {
		next(err);
	}
});

//POST create one user
router.post('/', async (req, res, next) => {
	try {
		const makeNew = await User.create(req.body);
		res.json(makeNew);
	} catch (err) {
		next(err);
	}
});

//DELETE one user
router.delete('/:userId', async (req, res, next) => {
	try {
		await User.destroy(req.params.userId);
		res.sendStatus(204);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
