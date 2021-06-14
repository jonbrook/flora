const express = require('express');
const router = express.Router();

const loginController = require('./controllers/login');
const registerController = require('./controllers/register');
const plantsController = require('./controllers/plants');
const plantsByUserController = require('./controllers/plantsByUser');
const userController = require('./controllers/user');

router.post('/login', loginController.loginHandler);

router.post('/register', registerController.registerController);

router.get('/plants', plantsController);

router.get('/plants/:email', plantsByUserController);
router.post('/plants/:email', plantsByUserController);

router.post('/user', userController);

module.exports = router;
