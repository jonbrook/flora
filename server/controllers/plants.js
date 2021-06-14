const plantsHandler = async (req, res) => {
  try {
    const plants = await Event.find();
    res.status(200).send(plants);
  } catch (error) {
    res.status(400);
  }
};
