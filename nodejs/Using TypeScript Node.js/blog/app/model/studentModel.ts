import { model, Schema } from "mongoose";
import {StudentInterface} from "../interface/StudentInterface"
import Joi from 'joi'

//validation schema
export const StudentSchemaValidate = Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string().required().email(),
    age: Joi.number().required().min(0),

})

const studentSchema=new Schema<StudentInterface>({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true,
        min: 0
    }
  

})

const Student = model<StudentInterface>('Student', studentSchema)

export { Student }