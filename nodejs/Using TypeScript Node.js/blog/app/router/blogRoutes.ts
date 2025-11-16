import express from 'express';
import userController from '../controller/userController';
import { blogController } from '../controller/blogController';
import authCheck from '../middleware/authCheck';



const router=express.Router()

// users Routes 
router.post('/register',userController.register)
router.post('/login',userController.login)

// Blog routes
router.post('/create-blog',authCheck ,blogController.createBlog)








export {router}