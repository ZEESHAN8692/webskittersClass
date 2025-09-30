import express from 'express';
import { studentControllers } from '../controller/studentController';


const router=express.Router()


router.get('/students', studentControllers.getStudents)
router.post('/add/students', studentControllers.createStudent)




export {router}