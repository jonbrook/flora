const express = require('express');
const router = express.Router();

const loginController = require('./controllers/loginController');
const registerController = require('./controllers/registerController');
const plantsController = require('./controllers/plantController');
const plantsByUserController = require('./controllers/plantsByUserController');
// const userController = require('./controllers/userController');

router.get('/plants', plantsController.plantsHandler);
router.get(
  '/plantsbyuser/:email',
  plantsByUserController.getPlantsByUserHandler,
);

router.post('/login', loginController.loginHandler);
router.post('/register', registerController.registerHandler);
router.post('/plants', plantsController.postPlantsHandler);
router.post('/plantsbyuser', plantsByUserController.postPlantsByUserHandler);

// router.post('/user', userController.userHandler);

module.exports = router;
