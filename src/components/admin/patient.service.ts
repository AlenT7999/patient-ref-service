import { Request, Response } from "express";
import { PatientData } from "../../interface/patient";
import * as PatientDal from "./patient.dal";

export const addPatient = async (req: any) => {
  try {
    // const pharmacyDetails: any = await PatientDal.verifyPatient(req);
    // const count = pharmacyDetails.count;
    // if (count !== 0 || count !== undefined) {
    //   return {
    //     message: "number already exist",
    //     status: false,
    //     statusCode: 500,
    //   };
    // }

    const response = await PatientDal.addPatient(req);
    return response;
  } catch (error) {
    return {
      message: error.message,
      status: false,
      statusCode: 500,
    };
  }
};
