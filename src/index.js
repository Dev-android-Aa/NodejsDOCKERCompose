import express  from "express";
import ip from 'ip';
import dotenv from 'dotenv';
import cors from 'cors';
import Response from "./domaine/response.js";
import HttpStatus from "./controller/patient.controller.js";
import patientRoutes from "./route/patient.route.js";
import logger from "./util/logger.js";

dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;
const app = express();
app.use(cors({origin:'*'}));
app.use(express.json());

//app.get('/',(req,res)=>res.send(new Response(200,'OK','Ptients API, v1.0.0 - all systemS ok',{patients:{name:'adil',age : 45}})));
//console.log(process.env);
//app.get('/',(req,res)=>res.send(new Response(200,'OK','Ptients API, v1.0.0 - all systemS ok')));
app.use('/patients',patientRoutes);
app.get('/',(req,res)=>res.send(new Response(HttpStatus.OK.code,HttpStatus.OK.status,'Ptients API, v1.0.0 - all systemS ok')));
app.all('*',(req,res)=>res.status(HttpStatus.NOT_FOUND.code) 
   .send(new Response(HttpStatus.NOT_FOUND.code,HttpStatus.NOT_FOUND.status,'Route does not exist on the server')));

//app.listen(PORT,()=> console.log(`Server runing on : ${ip.address()}:${PORT}`));
app.listen(PORT,()=> logger.info(`Server runing on : ${ip.address()}:${PORT}`));

