const db = require('../models/postgres.js');

const loginHandler = async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(400).send('Could not validate user');
    }
  } catch (error) {
    res.status(400);
  }
};
module.exports = {
  loginHandler,
};
