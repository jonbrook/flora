import { Request, Response } from 'express';
import sequelize from '../models/postgres';

const getPlantsByUserHandler = async (req: Request, res: Response) => {
  try {
    const userEmail = req.params;
    const plantsByUser = await sequelize.models.PlantsByUser.findAll({
      where: { email: userEmail.email },
    });
    if (plantsByUser) {
      res.status(200).send(plantsByUser);
    } else {
      res.status(400).send('could not get users');
    }
  } catch (error) {
    res.status(500);
  }
};

const postPlantsByUserHandler = async (req: Request, res: Response) => {
  const {
    email, scientificName, pictureURL, PlantId, UserId,
  } = req.body;
  try {
    const user = await sequelize.models.PlantsByUser.create({
      email,
      scientificName,
      pictureURL,
      lastWatered: new Date(),
      PlantId,
      UserId,
    });
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
};

export default { getPlantsByUserHandler, postPlantsByUserHandler };
