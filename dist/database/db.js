"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".env" });
exports.sequelize = new sequelize_1.Sequelize('patient_ref', 'admin', '123', {
    host: 'localhost',
    dialect: 'mysql',
});
exports.sequelize.authenticate();
//# sourceMappingURL=db.js.map