import { Dialect, Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const sequelize = new Sequelize(
  'patient_ref',
  'admin',
  '123',
  {
    host: 'localhost',
    dialect: 'mysql' as Dialect,
  }
);

sequelize.authenticate();
