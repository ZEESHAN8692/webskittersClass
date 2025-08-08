const express=require('express')
const AuthController = require('../controller/AuthController')
const { Auth } = require('../middleware/auth')

const router=express.Router()

router.post('/register/createuser',AuthController.register)
router.post('/login',AuthController.login)
router.post('/verify-otp',AuthController.verifyOtp)
router.post('/update-password',Auth,AuthController.updatePassword)
router.post('/reset-password-link', AuthController.sendUserPasswordResetLink)
router.post('/reset-password/:id/:token', AuthController.PasswordReset)
router.get('/dashboard',Auth,AuthController.dashboard)



module.exports=router