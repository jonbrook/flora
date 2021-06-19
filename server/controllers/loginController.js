const db = require('../models/postgres.js');
const loginHandler = async (req, res) => {
  const { email, password } = req.body;
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
      res.status(500).send('Could not validate user');
    }
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};
module.exports = {
  loginHandler,
};
