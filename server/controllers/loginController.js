// const User = require('../models/userModel.js');

const loginHandler = async (req, res) => {
  try {
    //get all of the users
    // const user = await User.findOne({
    //   where: {
    //     email: req.body.email,
    //     password: req.body.password,
    //   },
    // });
    const user = req.body;
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
