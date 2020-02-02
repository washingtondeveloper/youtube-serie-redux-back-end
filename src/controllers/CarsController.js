const Car = require('../models/Car');

class CarsController {
	constructor(dao) {
		this.dao = dao;
	}

	index = async (req, res) => {
		const cars = await this.dao.find();
		return res.json(cars);
	};

	create = async (req, res) => {
		const car = await this.dao.create(req.body);
		return res.status(201).json(car);
	};
}

module.exports = new CarsController(Car);
