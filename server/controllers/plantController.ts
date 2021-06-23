import { Request, Response } from 'express';
import sequelize from '../models/postgres';

const plantsHandler = async (req: Request, res: Response) => {
  try {
    const plants = await sequelize.models.Plant.findAll();
    res.status(200).send(plants);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500);
  }
};

const postPlantsHandler = async (req: Request, res: Response) => {
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
    const plant = await sequelize.models.Plant.create({
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
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).send('Server Error');
  }
};

export default { plantsHandler, postPlantsHandler };
