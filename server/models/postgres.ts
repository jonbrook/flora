import { Sequelize, DataTypes, Model, Association } from 'sequelize';
import * as dotenv from 'dotenv';
import {
  UserInterface,
  PlantsByUserInterface,
  PlantInterface,
} from '../interfaces/db';
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

class User extends Model<UserInterface> implements UserInterface {
  public username!: string;
  public email!: string;
  public password!: string;

  public readonly plantsByUser?: PlantsByUser[];

  public static associations: {
    plantsByUser: Association<User, PlantsByUser>;
  };
}

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
class PlantsByUser extends Model implements PlantsByUserInterface {
  public pictureURL!: string;
  public lastWatered!: string;

  public readonly plant?: Plant[];
  public readonly user?: User[];

  public static associations: {
    plant: Association<PlantsByUser, Plant>;
    user: Association<PlantsByUser, User>;
  };
}

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

class Plant extends Model implements PlantInterface {
  public scientificName!: string;
  public commonName!: string;
  public sunlightAmount!: string;
  public waterAmount!: number;
  public waterFrequency!: number;
  public airPurifying!: boolean;
  public humidity!: string;
  public soilMoisture!: string;

  public readonly plantsByUser?: PlantsByUser[];

  public static associations: {
    plantsByUser: Association<Plant, PlantsByUser>;
  };
}

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
Plant.hasMany(PlantsByUser);
PlantsByUser.belongsTo(Plant, {
  foreignKey: { allowNull: false },
});
PlantsByUser.belongsTo(User, {
  foreignKey: { allowNull: false },
});

export default sequelize;
