import { Router } from "express";
import * as PatientController from './patient.controller';

const patientRouter = Router();

patientRouter.post("/", PatientController.addPatient);

export default patientRouter;