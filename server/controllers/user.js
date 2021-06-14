const userHandler = async (req, res) => {
  try {
    //  const user = await User.create({
    //   email: req.body.email,
    //   username: req.body.username,
    //   password: req.body.password,
    // });
    const user = req.body;
    // const user = null;
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
  userHandler,
};
