"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientModal = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../database/db");
exports.PatientModal = db_1.sequelize.define("patients", {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        unique: true,
        primaryKey: true,
        allowNull: false,
    },
    firstName: sequelize_1.DataTypes.STRING(30),
    lastName: sequelize_1.DataTypes.STRING(30),
    email: sequelize_1.DataTypes.STRING(30),
    dob: sequelize_1.DataTypes.STRING(10),
    phone: sequelize_1.DataTypes.STRING(11),
    language: sequelize_1.DataTypes.STRING(11),
    address: sequelize_1.DataTypes.STRING(100),
    notes: sequelize_1.DataTypes.STRING(100),
});
//# sourceMappingURL=admin.js.map