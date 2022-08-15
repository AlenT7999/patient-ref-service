import { DataTypes } from "sequelize";
import { sequelize } from "../../database/db";

export const PatientModal = sequelize.define("patients", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
    primaryKey: true,
    allowNull: false,
  },
  firstName: DataTypes.STRING(30),
  lastName: DataTypes.STRING(30),
  email : DataTypes.STRING(30),
  dob: DataTypes.STRING(10),
  phone: DataTypes.STRING(11),
  language: DataTypes.STRING(11),
  address: DataTypes.STRING(100),
  notes: DataTypes.STRING(100),
});