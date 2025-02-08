import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes, Dialect, Model } from 'sequelize';
import process from 'process';
import configData from '../config/config.json';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

// Define the configuration interface for TypeScript type safety
interface Config {
  use_env_variable?: string;
  database: string;
  username: string;
  password: string | undefined;
  dialect: Dialect;
}

interface ConfigData {
  [key: string]: Config;
}

const configDataTyped: ConfigData = configData as unknown as ConfigData;
const config = configDataTyped[env];

// Declare the type of db with a fallback for sequelize
const db: { [key: string]: Model & { associate?: (db: { [key: string]: Model }) => void } } & {
  sequelize?: Sequelize;
  Sequelize?: typeof Sequelize;
} = {};

let sequelize: Sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]!, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    dialect: config.dialect,
  });
}

// Read all files in the directory, and import models dynamically
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      (file.slice(-3) === '.ts' || file.slice(-3) === '.js') &&
      file.indexOf('.test.ts') === -1
    );
  })
  .forEach((file) => {
    import(path.join(__dirname, file)).then((module) => {
      const model = module.default(sequelize, DataTypes); // Ensure default export
      db[model.name] = model;
    });
  });

// Setup associations if they exist on the model
Object.keys(db).forEach((modelName) => {
  const model = db[modelName];
  if (model && typeof model.associate === 'function') {
    model.associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
