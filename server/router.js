const express = require('express');
const router = express.Router();

const loginController = require('./controllers/loginController');
const registerController = require('./controllers/registerController');
const plantsController = require('./controllers/plantController');
const plantsByUserController = require('./controllers/plantsByUserController');
const userController = require('./controllers/userController');

router.post('/login', loginController.loginHandler);

router.post('/register', registerController.registerHandler);

router.get('/plants', plantsController.plantsHandler);
router.post('/plants', plantsController.postPlantsHandler);

router.get('/plantsbyuser', plantsByUserController.getPlantsByUserHandler);
router.post('/plantsbyuser', plantsByUserController.postPlantsByUserHandler);

router.post('/user', userController.userHandler);

module.exports = router;
