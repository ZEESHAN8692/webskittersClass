const express = require('express');
const AuthController = require('../controller/AuthController');
const { AuthCheck } = require('../middleware/Auth');
const upload = require('../helper/studentImage');

const router = express.Router();


router.post('/register',upload.single('image'),AuthController.register)

router.post('/verify',AuthController.verify)


router.post('/login',AuthController.login)

router.get('/dashboard',AuthCheck,AuthController.dashboard)
// router.post('/reset-password-link',AuthController.resetPasswordLink);
// router.post('/reset-password/:id/:token',AuthController.resetPassword);






module.exports = router;