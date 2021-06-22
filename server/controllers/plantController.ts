import db from '../models/postgres';
import { Request, Response } from 'express';

const plantsHandler = async (req: Request, res: Response) => {
  try {
    const plants = await db.Plant.findAll();
    res.status(200).send(plants);
  } catch (error) {
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
    res.status(500).send('Server Error');
  }
};

export default { plantsHandler, postPlantsHandler };
