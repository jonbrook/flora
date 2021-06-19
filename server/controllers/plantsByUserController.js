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
    res.status(500);
  }
};

const postPlantsByUserHandler = async (req, res) => {
  const { email, scientificName, pictureURL, PlantId, UserId } = req.body;
  try {
    const user = await db.PlantsByUser.create({
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
    res.status(400);
  }
};

module.exports = {
  getPlantsByUserHandler,
  postPlantsByUserHandler,
};
