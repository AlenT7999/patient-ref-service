"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPatient = exports.verifyPatient = void 0;
const admin_1 = require("../modals/admin");
const verifyPatient = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { phone } = req;
        const result = yield admin_1.PatientModal.findAndCountAll({
            where: { phoneNumber: phone },
        });
        console.log('result', result);
        return {
            message: "Success",
            status: true,
            statusCode: 200,
            count: result.count,
        };
    }
    catch (error) {
        return {
            message: error.message,
            status: false,
            statusCode: 500,
        };
    }
});
exports.verifyPatient = verifyPatient;
const addPatient = (req) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('dalData', req);
    const patients = req;
    try {
        const result = yield admin_1.PatientModal.bulkCreate(patients);
        return {
            message: "Success",
            status: true,
            statusCode: 200,
        };
    }
    catch (error) {
        return {
            message: error.message,
            status: false,
            statusCode: 500,
        };
    }
});
exports.addPatient = addPatient;
//# sourceMappingURL=patient.dal.js.map