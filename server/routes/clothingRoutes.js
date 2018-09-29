const router = require('express').Router();
const { Clothes } = require('../models');

// GET find all users
router.get('/', async (req, res, next) => {
	try {
		const allClothes = await Clothes.findAll();
		res.json(allClothes);
	} catch (err) {
		next(err);
	}
});
//GET one clothes
router.get('/:clothesId', async (req, res, next) => {
	try {
		console.log('WHAT ARE WE GETTING? clothes', req.params);
		const foundClothes = await Clothes.findById(req.params.clothesId);
		res.json(foundClothes);
	} catch (err) {
		next(err);
	}
});
//PUT update one clothes
router.put('/:clothesId', async (req, res, next) => {
	try {
		const letsUpdate = await Clothes.findById(req.params.clothesId);
		const updated = await letsUpdate.update(req.body);
		res.status(200).send(updated);
	} catch (err) {
		next(err);
	}
});

//POST create one clothes
router.post('/', async (req, res, next) => {
	try {
		const makeNew = await Clothes.create(req.body);
		res.json(makeNew);
	} catch (err) {
		next(err);
	}
});

//DELETE one clothes
router.delete('/:clothesId', async (req, res, next) => {
	try {
		await Clothes.destroy(req.params.clothesId);
		res.sendStatus(204);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
