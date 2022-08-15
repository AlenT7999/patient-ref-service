import { Request, Response } from "express";
import Joi from "joi";
import { joiValidation } from "../../utils/util_service";
import { PatientData } from "../../interface/patient";
import * as PatientService from "./patient.service";

export const addPatient = async (req: Request, res: Response) => {

  try {
    const schema = Joi.array().items({
      firstName: Joi.string().min(3).max(30).required().label("first name"),
      lastName: Joi.string().min(3).max(30).required().label("last name"),
      email: Joi.string().email().required().label("Email ID"),
      dob: Joi.string().min(1).max(10).required().label("DOB"),
      language: Joi.string().min(1).max(30).required().label("language"),
      phone: Joi.string().min(9).max(11).required().label("phone_number"),
      address: Joi.string().max(100).required().label("address"),
      notes: Joi.string().max(100).label("notes"),
    });
    const pharmacyData: any = req.body;
    const validation: any = await joiValidation(schema, pharmacyData);
    if (!validation.status) {
      return res.json(validation);
    }
    const response = await PatientService.addPatient(pharmacyData);
    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
};
