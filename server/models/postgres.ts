import { Sequelize, DataTypes } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

const db: any = {};

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

const PlantsByUser = sequelize.define('PlantsByUser', {
  pictureURL: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastWatered: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

const Plant = sequelize.define('Plant', {
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

const User = sequelize.define('User', {
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

db[User.name] = User;
db[Plant.name] = Plant;
db[PlantsByUser.name] = PlantsByUser;

db.User.hasMany(db.PlantsByUser);
db.Plant.hasMany(db.PlantsByUser);
db.PlantsByUser.belongsTo(db.Plant, {
  foreignKey: { allowNull: false },
});
db.PlantsByUser.belongsTo(db.User, {
  foreignKey: { allowNull: false },
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
