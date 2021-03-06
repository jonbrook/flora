import { Request, Response } from 'express';
import sequelize from '../models/postgres';

const registerHandler = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const foundUser = await sequelize.models.User.findOne({ where: { email } });
    if (foundUser) {
      res.status(400).send('User Already exists');
    } else {
      const user = await sequelize.models.User.create({
        username,
        email,
        password,
      });
      res.status(201).json(user);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).send('Server Error');
  }
};

export default { registerHandler };
