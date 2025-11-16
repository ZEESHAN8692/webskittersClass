const { hashPassword, createToken, comparePassword } = require('../middleware/authHelper');
const UserModel = require('../model/user')
const jwt=require('jsonwebtoken')

class UserController {
    //*****for user register */
    register = async (req, res) => {
        try {
            const { name, email, password, mobile, first_school, role } = req.body;
            //validation
            if (!name) {
                return res.send({ message: "Name is Required" });
            }
            if (!email) {
                return res.send({ message: "Email is Required" });
            }
            if (!password) {
                return res.send({ message: "Password is Required" });
            }
            if (!mobile) {
                return res.send({ message: "Phone no is Required" });
            }
            if (!first_school) {
                return res.send({ message: "First School is Required" });
            }
            //check user
            const exisitingUser = await UserModel.findOne({ email });
            //exisiting user
            if (exisitingUser) {
                return res.status(500).send({
                    success: false,
                    message: "Already Register this Email please login",

                });
            }
            //register user
            const hashedPassword = await hashPassword(password)
            //save
            const user = await new UserModel({
                name,
                email,
                mobile,
                password: hashedPassword,
                first_school,
                role,
            })
            if (req.file) {
                user.image = req.file.path
            }
            user.save()
            const tokendata = await createToken(user._id)
            return res.status(200).send({
                status: true,
                message: "User Register Successfully",
                data: user,
                token: tokendata
            });

        } catch (error) {
            res.status(500).send({
                status: false,
                message: "Erorr in getting Register",
                error: error.message,
            });
        }

    }

    login=async(req,res)=>{
        try {
            const { email, password } = req.body;
                //validation
                if (!email || !password) {
                    return res.status(500).send({
                        status: false,
                        message: "Invalid email or password",
                    });
                }
                //check user
                const user = await UserModel.findOne({ email });
                if (!user) {
                    return res.status(500).send({
                        status: false,
                        message: "Email is not registerd",
                    });
                }
                const match = await comparePassword(password, user.password);
                if (!match) {
                    return res.status(500).send({
                        status: false,
                        message: "Invalid Password",
                    });
                }
                const token = await jwt.sign({
                     _id: user._id,
                     name:user.name,
                     email:user.email,
                     mobile:user.mobile,
                     image:user.image,
                     first_school:user.first_school,
                     role:user.role 
                    }, "kumardasagnikrajusoumikwebskitters", { expiresIn: "12h" });
                    return res.status(200).send({
                    status: true,
                    message: "login successfully",
                    user: {
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        mobile: user.mobile,
                        image:user.image,
                        first_school:user.first_school,
                        role:user.role
                    },
                    token,
                });
          } catch (error) {
            res.status(500).send({
              status: false,
              message: "Erorr in getting Register",
              error: error.message,
            });
          }
    }

    dashboard=async(req,res)=>{
        try{
            return res.status(200).json({
                message:'welcome to user dashboard'
            })

        }catch(error){
            console.log(error);
        }
    }

}


module.exports = new UserController()