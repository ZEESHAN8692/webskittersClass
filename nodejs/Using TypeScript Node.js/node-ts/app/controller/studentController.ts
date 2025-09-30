import express from 'express';
import { Request, Response } from 'express'

import { StudentSchemaValidate } from '../model/studentModel';
import { studentRepositories } from '../repositories/studentRepositories';


class StudentController {

    async getStudents(req: Request, res: Response) {
        res.send("Get Students")
    }

    async createStudent(req: Request, res: Response):Promise<any> {
        console.log(req.body);
        try {
            const { name, email, age } = req.body
            const data = { name, email, age }
            const { error, value } = StudentSchemaValidate.validate(data)
            if (error) {
                return res.send(error.message)
            } else {
                //call the create post function in the service and pass the data from the request
                const studentData = await studentRepositories.save(value)


                return res.status(200).send({
                    message: "data created successfully",
                    data: studentData,
                });
            }
            
        } catch (error) {
            
        }
        

    }
      
}



export const studentControllers = new StudentController()