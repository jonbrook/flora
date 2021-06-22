import { Sequelize, DataTypes } from 'sequelize';
import fs from 'fs';
import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const db: any = {};

const sequelize = new Sequelize(
  process.env.POSTGRES_DB || 'default',
  process.env.POSTGRES_USER || 'default',
  process.env.POSTGRES_PASSWORD || 'default',
  {
    host: process.env.DB_HOST || 'default',
    dialect: 'postgres' || 'default',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

const files = fs.readdirSync(__dirname);

for (const file of files) {
  if (file !== 'postgres.ts') {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  }
}

for (const model in db) {
  if (db[model].associate) {
    db[model].associate(db);
  }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
