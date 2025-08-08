
const { comparePassword } = require('../middleware/auth')
const UserModel = require('../model/user')
const EmailVerifyModel = require('../model/otpVerify')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sendEmailVerificationOTP = require('../helper/sendEmailVerificationOTP');
const transporter = require('../config/emailConfig');
class AuthController {

    async register(req, res) {
        try {
            //console.log(req.body);

            const { name, email, password } = req.body
            if (!name || !email || !password) {
                return res.status(400).json({
                    message: "All fields are required"
                })
            }

            const edata = await UserModel.findOne({ email })
            if (edata) {
                return res.status(400).json({
                    message: "User already exists"
                })
            }

            // const hashPassword= await hashPassword(password)
            const salt = bcrypt.genSaltSync(10);
            const user = await UserModel.create({
                name,
                email,
                password: await bcrypt.hash(password, salt)
            })

            sendEmailVerificationOTP(req, user)
            res.status(201).json({
                message: "Registration Success and send otp in your email id",
                user: user
            })

        } catch (err) {
            console.log(err);

        }
    }

    async verifyOtp(req, res) {
        try {
            const { email, otp } = req.body;
            // Check if all required fields are provided
            if (!email || !otp) {
                return res.status(400).json({ status: false, message: "All fields are required" });
            }
            const existingUser = await UserModel.findOne({ email });

            // Check if email doesn't exists
            if (!existingUser) {
                return res.status(404).json({ status: "failed", message: "Email doesn't exists" });
            }

            // Check if email is already verified
            if (existingUser.is_verified) {
                return res.status(400).json({ status: false, message: "Email is already verified" });
            }
            // Check if there is a matching email verification OTP
            const emailVerification = await EmailVerifyModel.findOne({ userId: existingUser._id, otp });
            if (!emailVerification) {
                if (!existingUser.is_verified) {
                    // console.log(existingUser);
                    await sendEmailVerificationOTP(req, existingUser);
                    return res.status(400).json({ status: false, message: "Invalid OTP, new OTP sent to your email" });
                }
                return res.status(400).json({ status: false, message: "Invalid OTP" });
            }
            // Check if OTP is expired
            const currentTime = new Date();
            // 15 * 60 * 1000 calculates the expiration period in milliseconds(15 minutes).
            const expirationTime = new Date(emailVerification.createdAt.getTime() + 15 * 60 * 1000);
            if (currentTime > expirationTime) {
                // OTP expired, send new OTP
                await sendEmailVerificationOTP(req, existingUser);
                return res.status(400).json({ status: "failed", message: "OTP expired, new OTP sent to your email" });
            }
            // OTP is valid and not expired, mark email as verified
            existingUser.is_verified = true;
            await existingUser.save();

            // Delete email verification document
            await EmailVerifyModel.deleteMany({ userId: existingUser._id });
            return res.status(200).json({ status: true, message: "Email verified successfully" });


        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, message: "Unable to verify email, please try again later" });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body
            if (!email || !password) {
                return res.status(400).json({
                    message: "All fields are required"
                })
            }
            const user = await UserModel.findOne({ email })
            if (!user) {
                return res.status(400).json({
                    message: "User not found"
                })
            }
            // Check if user verified
            if (!user.is_verified) {
                return res.status(401).json({ status: false, message: "Your account is not verified" });
            }
            const isMatch = comparePassword(password, user.password)
            if (!isMatch) {
                return res.status(401).json({
                    message: "Invalid credentials"
                })
            }
            const token = jwt.sign({
                _id: user._id,
                name: user.name,
                email: user.email
            }, process.env.JWT_ACCESS_TOKEN_SECRET_KEY,
                { expiresIn: "1d" })

            res.status(200).json({
                message: "User logged in successfully",
                data: {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                },
                token: token
            })
        } catch (err) {
            console.log(err);

        }

    }

    async updatePassword(req,res){
        try{
            const { password, confirm_password } = req.body;
             if (!password || !confirm_password) {
              return res.status(400).json({ status:false, message: "New Password and Confirm New Password are required" });
            }
            if(password !== confirm_password){
              return res.status(400).json({ status: "failed", message: "New Password and Confirm New Password don't match" });
            }
             const salt = await bcrypt.genSalt(10);
             const newHashPassword = await bcrypt.hash(password, salt);
            await UserModel.findByIdAndUpdate(req.user._id, { $set: { password: newHashPassword } });
            res.status(200).json({ status: "success", message: "Password update successfully" });
      
          }catch(error){
            console.error(error);
           return res.status(500).json({ status: "failed", message: "Unable to change password, please try again later" });
          }

    }


    async sendUserPasswordResetLink(req,res){
        try{
            const { email } = req.body;
            if (!email) {
              return res.status(400).json({ status:false, message: "Email field is required" });
            }
            const user = await UserModel.findOne({ email });
            if (!user) {
              return res.status(404).json({ status:false, message: "Email doesn't exist" });
            }
            // Generate token for password reset
            const secret = user._id + process.env.JWT_ACCESS_TOKEN_SECRET_KEY;
            const token = jwt.sign({ userID: user._id }, secret, { expiresIn: '20m' });
            // Reset Link and this link generate by frontend developer
            const resetLink = `${process.env.FRONTEND_HOST}/account/reset-password-confirm/${user._id}/${token}`;
            //console.log(resetLink);
            // Send password reset email  
            await transporter.sendMail({
              from: process.env.EMAIL_FROM,
              to: user.email,
              subject: "Password Reset Link",
              html: `<p>Hello ${user.name},</p><p>Please <a href="${resetLink}">Click here</a> to reset your password.</p>`
            });
            // Send success response
            res.status(200).json({ status:true, message: "Password reset email sent. Please check your email." });
      
          }catch(error){
            console.log(error);
            res.status(500).json({ status:false, message: "Unable to send password reset email. Please try again later." });
      
          }

    }

    
    async PasswordReset(req,res){
        try{
            const { password, confirm_password } = req.body;
           const { id, token } = req.params;
           const user = await UserModel.findById(id);
           if (!user) {
             return res.status(404).json({ status:false, message: "User not found" });
           }
           // Validate token check 
           const new_secret = user._id + process.env.JWT_ACCESS_TOKEN_SECRET_KEY;
           jwt.verify(token, new_secret);
     
           if (!password || !confirm_password) {
             return res.status(400).json({ status:false, message: "New Password and Confirm New Password are required" });
           }
     
           if (password !== confirm_password) {
             return res.status(400).json({ status:false, message: "New Password and Confirm New Password don't match" });
           }
            // Generate salt and hash new password
            const salt = await bcrypt.genSalt(10);
            const newHashPassword = await bcrypt.hash(password, salt);
      
            // Update user's password
            await UserModel.findByIdAndUpdate(user._id, { $set: { password: newHashPassword } });
      
            // Send success response
            res.status(200).json({ status: "success", message: "Password reset successfully" });
      
         }catch(error){
           return res.status(500).json({ status: "failed", message: "Unable to reset password. Please try again later." });
         }

    }


    async dashboard(req, res) {
        try {
            res.status(200).json({
                message: "welcome to user dashboard",
            })
        } catch (err) {
            console.log(err);
        }
    }

}
module.exports = new AuthController()