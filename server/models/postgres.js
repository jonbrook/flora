const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const db = {};

const sequelize = new Sequelize('flora-db', 'davidspanjaard', '', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const User = sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Plant = sequelize.define('plant', {
  scientificName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  commonName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sunlightAmount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  waterAmount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  lastWatered: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  airPurifying: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  humidity: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

const PlantsByUser = sequelize.define('plantbyuser', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  scientificName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pictureURL: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastWatered: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

db[User.name] = User;
db[Plant.name] = Plant;
db[PlantsByUser.name] = PlantsByUser;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
