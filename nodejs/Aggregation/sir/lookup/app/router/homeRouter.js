const express = require('express');
const homeController = require('../controller/homeController');
const {jwtAuth, isLogout} = require('../middleware/webAuth');
const router = express.Router();


router.get('/', homeController.home);
router.get('/about', homeController.about);
router.get('/contact', homeController.contact);

/****crud using ejs */

router.get('/addstudent',homeController.AddStudentView);
router.post('/addstudent/create',homeController.AddStudent);
router.get('/update/:id',homeController.edit);
router.post('/updatestudent/:id',homeController.updateStudent);
router.get('/delete/:id',homeController.deleteStudent);



/***auth ejs */
router.get('/login',isLogout,homeController.login);
router.post('/login/create',homeController.loginUsercreate);
router.get('/register',isLogout,homeController.register);
router.post('/register/create',homeController.registerUsercreate);
router.get('/logout',homeController.logout);
router.get('/dashboard',jwtAuth,homeController.AuthCheckUser,homeController.dashboardpage);
module.exports = router;