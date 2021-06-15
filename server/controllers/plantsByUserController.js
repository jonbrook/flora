const db = require('../models/postgres');

const getPlantsByUserHandler = async (req, res) => {
  try {
    const userEmail = req.params;
    const plantsByUser = await db.PlantsByUser.findAll({
      where: { email: userEmail.email },
    });
    if (plantsByUser) {
      res.status(200).send(plantsByUser);
    } else {
      res.status(400).send('could not get users');
    }
  } catch (error) {
    res.status(400);
  }
};

const postPlantsByUserHandler = async (req, res) => {
  try {
    const user = await db.PlantsByUser.create({
      email: req.body.email,
      scientificName: req.body.scientificName,
      pictureURL: req.body.pictureURL,
      lastWatered: new Date(),
    });
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

module.exports = {
  getPlantsByUserHandler,
  postPlantsByUserHandler,
};
