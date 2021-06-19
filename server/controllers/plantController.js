const db = require('../models/postgres.js');

const plantsHandler = async (req, res) => {
  try {
    const plants = await db.Plant.findAll();
    res.status(200).send(plants);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const postPlantsHandler = async (req, res) => {
  const {
    scientificName,
    commonName,
    sunlightAmount,
    waterAmount,
    waterFrequency,
    airPurifying,
    humidity,
    soilMoisture,
  } = req.body;
  try {
    const plant = await db.Plant.create({
      scientificName,
      commonName,
      sunlightAmount,
      waterAmount,
      waterFrequency,
      airPurifying,
      humidity,
      soilMoisture,
    });
    res.status(200).send(plant);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};
module.exports = {
  plantsHandler,
  postPlantsHandler,
};
