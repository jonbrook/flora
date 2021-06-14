const loginHandler = async (req, res) => {
  try {
    //get all of the users
    const users = await Event.find();
    const arrayOfUsers = [...users];
    const isAuthenticated = checkUserCredentials(req.body, arrayOfUsers);
    if (isAuthenticated) {
      res.status(200).send(req.body);
    } else {
      res.status(400).send('Could not validate user');
    }
  } catch (error) {
    res.status(400);
  }
};

const checkUserCredentials = (currentUser, arrayOfUsers) => {
  let validatedCrentials = false;
  arrayOfUsers.filter((user) => {
    if (
      user.email === currentUser.email &&
      user.password === currentUser.password
    ) {
      return validatedCrentials;
    }
  });

  return validatedCrentials;
};

module.exports = {
  loginHandler,
};
