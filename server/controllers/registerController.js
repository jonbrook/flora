const db = require('../models/postgres.js');

const registerHandler = async (req, res) => {
  try {
    const foundUser = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (foundUser) {
      res.status(400).send('User Already exists');
    } else {
      const user = await db.User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      res.status(201).send(user);
      // }
    }
  } catch (error) {
    res.status(400);
  }
};

module.exports = {
  registerHandler,
};
