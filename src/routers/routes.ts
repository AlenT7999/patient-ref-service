import { Router } from "express";
import patientRouter from "../components/admin/patient.routes";

const routes = Router();
routes.use('/patient', patientRouter);

export default routes;