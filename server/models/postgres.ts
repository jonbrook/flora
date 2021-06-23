import { Sequelize, DataTypes } from 'sequelize';
import * as dotenv from 'dotenv';
import User from './User';
import Plant from './Plant';
import PlantsByUser from './PlantsByUser';
dotenv.config();

const sequelize = new Sequelize(
  process.env.POSTGRES_DB || 'database',
  process.env.POSTGRES_USER || 'user',
  process.env.POSTGRES_PASSWORD || 'password',
  {
    host: process.env.DB_HOST || 'localhost',
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

User.init(
  {
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
  },
  { sequelize },
);

PlantsByUser.init(
  {
    pictureURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastWatered: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { sequelize },
);

Plant.init(
  {
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
  },
  { sequelize },
);

User.hasMany(PlantsByUser);
PlantsByUser.belongsTo(Plant, {
  foreignKey: { allowNull: false },
});
PlantsByUser.belongsTo(User, {
  foreignKey: { allowNull: false },
});
Plant.hasMany(PlantsByUser);

export default sequelize;
