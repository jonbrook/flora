const express = require('express');
const router = express.Router();

const loginController = require('./controllers/loginController');
const registerController = require('./controllers/registerController');
const plantsController = require('./controllers/plantController');
const plantsByUserController = require('./controllers/plantsByUserController');
const userController = require('./controllers/user');

router.post('/login', loginController.loginHandler);

router.post('/register', registerController.registerController);

router.get('/plants', plantsController);

router.get('/plants/:email', plantsByUserController);
router.post('/plants/:email', plantsByUserController);

router.post('/user', userController);

module.exports = router;
