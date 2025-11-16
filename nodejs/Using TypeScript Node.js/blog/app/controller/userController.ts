import { Request, Response } from "express";
import { User } from "../model/userModel";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { stat } from "fs";
class UserController {
    async register(req: Request, res: Response):Promise<any> {

        try {
            const { name, email, password, role } = req.body
            const hashedPassword = await bcrypt.hash(password, 10)
            const user = await User.create({ name, email, password: hashedPassword, role })
            res.status(200).send({
                status: true,
                message: "User created successfully",
                data: user
            })
        } catch (error) {
            console.log(error)
        }
    }

    async login(req: Request, res: Response):Promise<any> {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(404).send("User not found")
            }
            const isPasswordValid = await bcrypt.compare(password, user.password)
            if (!isPasswordValid) {
                return res.status(401).send("Invalid password")
            }
            const token = jwt.sign({ _id: user._id , role: user.role, email: user.email, name: user.name }, process.env.JWT_SECRET!, { expiresIn: "1d" })
            res.status(200).send({
                status: true,
                message: "User logged in successfully",
                data: user,
                token
            })
        } catch (error) {
            console.log(error)
        }
    }




}

export default new UserController