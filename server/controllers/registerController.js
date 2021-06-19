const db = require('../models/postgres');

const registerHandler = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const foundUser = await db.User.findOne({ where: { email } });
    if (foundUser) {
      res.status(400).send('User Already exists');
    } else {
      const user = await db.User.create({
        username,
        email,
        password,
      });
      res.status(201).json(user);
    }
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  registerHandler,
};
