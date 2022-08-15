"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPatient = void 0;
const joi_1 = __importDefault(require("joi"));
const util_service_1 = require("../../utils/util_service");
const PatientService = __importStar(require("./patient.service"));
const addPatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const schema = joi_1.default.array().items({
            firstName: joi_1.default.string().min(3).max(30).required().label("first name"),
            lastName: joi_1.default.string().min(3).max(30).required().label("last name"),
            email: joi_1.default.string().email().required().label("Email ID"),
            dob: joi_1.default.string().min(1).max(10).required().label("DOB"),
            language: joi_1.default.string().min(1).max(30).required().label("language"),
            phone: joi_1.default.string().min(9).max(11).required().label("phone_number"),
            address: joi_1.default.string().max(100).required().label("address"),
            notes: joi_1.default.string().max(100).label("notes"),
        });
        const pharmacyData = req.body;
        const validation = yield (0, util_service_1.joiValidation)(schema, pharmacyData);
        if (!validation.status) {
            return res.json(validation);
        }
        const response = yield PatientService.addPatient(pharmacyData);
        return res.json(response);
    }
    catch (error) {
        return res.json(error);
    }
});
exports.addPatient = addPatient;
//# sourceMappingURL=patient.controller.js.map