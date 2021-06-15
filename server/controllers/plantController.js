const db = require('../models/postgres.js');

const plantsHandler = async (req, res) => {
  try {
    const plants = await db.Plant.findAll();
    res.status(200).send(plants);
  } catch (error) {
    res.status(400);
  }
};

const postPlantsHandler = async (req, res) => {
  try {
    const plant = await db.Plant.create({
      scientificName: req.body.scientificName,
      commonName: req.body.commonName,
      sunlightAmount: req.body.sunlightAmount,
      waterAmount: req.body.waterAmount,
      waterFrequency: req.body.waterFrequency,
      airPurifying: req.body.airPurifying,
      humidity: req.body.humidity,
      soilMoisture: req.body.soilMoisture,
    });
    res.status(200).send(plant);
  } catch (error) {
    res.status(400);
  }
};
module.exports = {
  plantsHandler,
  postPlantsHandler,
};
