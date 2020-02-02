const router = require('express').Router();

const carsController = require('../controllers/CarsController');
const loginController = require('../controllers/LoginController');

router.get('/cars', carsController.index);
router.post('/cars', carsController.create);

router.post('/login', loginController.login);

module.exports = router;
