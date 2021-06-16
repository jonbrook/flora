const USERS = [
  {
    username: 'd',
    email: 'a',
    password: '1234',
  },
  {
    username: 'd',
    email: 'a',
    password: '1234',
  },
];

const plantsByUser = [
  {
    scientificName: 'Ficus elastica',
    email: 'email@gmail.com',
    pictureURL: 'rubber.jpg',
    lastWatered: 0,
  },
  {
    scientificName: 'Sansevieria trifasciata',
    email: 'email@gmail.com',
    pictureURL: 'snake.jpg',
    lastWatered: 0,
  },
  {
    scientificName: 'Crassula ovata',
    email: 'email@gmail.com',
    pictureURL: 'jade.jpg',
    lastWatered: 0,
  },
  {
    scientificName: 'Zamioculcas Zamifolia',
    email: 'email@gmail.com',
    pictureURL: 'zz.jpg',
    lastWatered: 0,
  },
];

const plants = [
  {
    scientificName: 'Ficus elastica',
    commonName: 'Rubber Plant',
    sunlightAmount: 'part shade',
    waterAmount: 200,
    waterFrequency: 14,
    airPurifying: true,
    humidity: 'high',
    soilMoisture: 'dry',
  },
  {
    scientificName: 'Monstera deliciosa',
    commonName: 'Swiss Cheese Plant',
    sunlightAmount: 'part shade',
    waterAmount: 200,
    waterFrequency: 14,
    airPurifying: true,
    humidity: 'medium',
    soilMoisture: 'dry',
  },
  {
    scientificName: 'Sansevieria trifasciata',
    commonName: 'Snake Plant',
    sunlightAmount: 'part shade',
    waterAmount: 200,
    waterFrequency: 14,
    airPurifying: true,
    humidity: 'medium',
    soilMoisture: 'dry',
  },
  {
    scientificName: 'Crassula ovata',
    commonName: 'Jade Plant',
    sunlightAmount: 'part shade',
    waterAmount: 200,
    waterFrequency: 14,
    airPurifying: true,
    humidity: 'low',
    soilMoisture: 'dry',
  },
  {
    scientificName: 'Zamioculcas Zamifolia',
    commonName: 'ZZ plant',
    sunlightAmount: 'part shade',
    waterAmount: 200,
    waterFrequency: 14,
    airPurifying: true,
    humidity: 'medium',
    soilMoisture: 'slightly dry',
  },
];

module.exports = {
  plantsByUser,
  plants,
  USERS,
};
