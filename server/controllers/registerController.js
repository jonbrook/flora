// const User = require('../models/userModel.js');

const registerHandler = async (req, res) => {
  try {
    //Checks if email is available
    // const user = await User.findOne({
    //   where: {
    //     email: req.body.email,
    //   },
    // });
    const user = null;
    if (user) {
      res.status(400).send('User Already exists');
    } else {
      // const user = await User.create({
      //   email: req.body.email,
      //   username: req.body.username,
      //   password: req.body.password,
      // });
      res.status(201).send(user);
    }
  } catch (error) {
    res.status(400);
  }
};

module.exports = {
  registerHandler,
};
