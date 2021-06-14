const express = require('express');
const router = express.Router();

const loginHandler = require('./controllers/login');
const registerHandler = require('./controllers/register');
const plantsHandler = require('./controllers/plants');
const {
  getPlantsByUserHandler,
  postPlantsByUserHandler,
} = require('./controllers/plantsByUser');
const userHandler = require('./controllers/user');

router.get('/login', loginHandler);

router.post('/register', registerHandler);

router.get('/plants', plantsHandler);

router.get('/plants/:email', getPlantsByUserHandler);
router.post('/plants/:email', postPlantsByUserHandler);

router.post('/user', userHandler);

module.exports = router;
