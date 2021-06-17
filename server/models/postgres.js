const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const db = {};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

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
  waterFrequency: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  airPurifying: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  humidity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  soilMoisture: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const PlantsByUser = sequelize.define('plantsbyuser', {
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

db.User = User;
db.Plant = Plant;
db.PlantsByUser = PlantsByUser;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
