import db from '../models/postgres';
import { Request, Response } from 'express';

const loginHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!password || !email) {
    res.sendStatus(400);
  }
  try {
    const user = await db.User.findOne({
      where: { email, password },
      include: {
        model: db.PlantsByUser,
        attributes: ['id', 'pictureURL', 'lastWatered'],
        include: {
          model: db.Plant,
          attributes: [
            'scientificName',
            'commonName',
            'sunlightAmount',
            'waterAmount',
            'waterFrequency',
            'airPurifying',
            'humidity',
            'soilMoisture',
          ],
        },
      },
      attributes: ['id', 'username'],
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).send('Could not validate user');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
};

export default { loginHandler };
