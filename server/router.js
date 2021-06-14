const express = require('express');
const router = express.Router();

const loginHandler = require('./controllers/login');
const registerHandler = require('./controllers/register');
const plantsHandler = require('./controllers/plants');
const plantsByUserHandler = require('./controllers/controllers');
const userHandler = require('./controllers/controllers');

router.get('/login', loginHandler);

router.post('/register', registerHandler);

router.get('/plants', plantsHandler);

router.get('/plants/:email', plantsByUserHandler);
router.post('/plants/:email', plantsByUserHandler);

router.post('/user', userHandler);

module.exports = router;
