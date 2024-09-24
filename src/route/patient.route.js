import express from 'express';
import { getPatient ,getPatients , createPatient , updatePatient ,deletePatient } from '../controller/patient.controller.js';

const patientRoutes = express.Router();
patientRoutes.route('/')
  .get(getPatients)
  .post(createPatient);
 patientRoutes.route('/:id')
  .get(getPatient)
  .put(updatePatient)
  .delete(deletePatient);

 export default patientRoutes;