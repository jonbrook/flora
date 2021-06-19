const express = require('express');
const cors = require('cors');
const router = require('./router.js');

const app = new express();

app.use(cors());
app.use(express.json());
app.use(router);

module.exports = app;
