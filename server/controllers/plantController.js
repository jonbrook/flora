// const { Plants } = require('../models/plantModel.js');

const plantsHandler = async (req, res) => {
  try {
    // const plants = await Plants.findAll();

    res.status(200).send(' hi ');
  } catch (error) {
    res.status(400);
  }
};

module.exports = {
  plantsHandler,
};
