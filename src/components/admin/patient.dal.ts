import { Request, Response } from "express";
import { PatientModal } from "../modals/admin";
import { v4 as uuidv4 } from "uuid";
import { PatientData } from "../../interface/patient";

export const verifyPatient = async (req: PatientData) => {
  try {
    const { phone } = req;
    const result: any = await PatientModal.findAndCountAll({
      where: { phoneNumber: phone },
    });
    console.log('result', result);
    
    return {
      message: "Success",
      status: true,
      statusCode: 200,
      count: result.count,
    };
  } catch (error) {
    return {
      message: error.message,
      status: false,
      statusCode: 500,
    };
  }
};

export const addPatient = async (req: any) => {
  console.log('dalData', req);
  
  const patients = req;
  try {
    const result = await PatientModal.bulkCreate(patients);
    return {
      message: "Success",
      status: true,
      statusCode: 200,
    };
  } catch (error) {
    return {
      message: error.message,
      status: false,
      statusCode: 500,
    };
  }
};
