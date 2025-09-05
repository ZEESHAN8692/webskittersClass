const UserModel= require("../model/userModel")  
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const BlogModel = require("../model/blogModel");
const dotenv = require("dotenv");
dotenv.config();

class Controller {
    async getHome(req, res) {
        res.send("Selamat datang di blog saya")
    }

    // Authentication 

    async register(req, res) {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res.status(400).json({
          message: "All fields are required",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await new UserModel({
        name,
        email,
        password: hashedPassword,
      }).save();

      res.status(201).json({
        message: "User created successfully",
        user: user,
      });
    } catch (err) {
      console.log(err);
    }
  }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({
                    message: "All fields are required",
                });
            }

            const user = await UserModel.findOne({ email });
            if (!user) {
                return res.status(401).json({
                    message: "User not found",
                });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({
                    message: "Invalid password",
                });
            }

            const token = jwt.sign({ id: user._id , role: user.role, name: user.name, email: user.email },process.env.JWT_ACCESS_TOKEN_SECRET_KEY,{
                expiresIn: "1h",
            });
            res.status(200).json({
                message: "Login successful",
                token: token,
                user: user,
            });
        } catch (err) {
            console.log(err);
        }
    }   

    async createBlog(req, res) {
        try {
            const { title, description  } = req.body;
            if (!title || !description) {
                return res.status(400).json({
                    message: "All fields are required",
                });
            }
            console.log("Token User",req.user.id);
            const blog = await new BlogModel({
                title,
                description,
                author: req.user.id
            }).save();
            res.status(201).json({
                message: "Blog created successfully",
                blog: blog,
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal server error",
                error: err,
            })
        }
    }

    async getBlog(req, res) {
        try {
            // const blogs = await BlogModel.find().populate("author","name email");
            // res.status(200).json({
            //     message: "Blogs fetched successfully",
            //     blogs: blogs,
            // });

            const blogs = await BlogModel.aggregate([
                {$lookup:{
                    from:"users",
                    localField:"author",
                    foreignField:"_id",
                    as:"author"
                }},
                {$unwind:"$author"},
                {
                    $project:{
                        title:1,
                        description:1,
                        "author.name":1,
                        "author.email":1,
                        createAt:1,
                        updateAt:1
                    }
                }
            ])
            res.status(200).json({
                message: "Blogs fetched successfully",
                blogs: blogs,
            });
        } catch (err) {
            console.log(err);
        }

   }

    async getSingleBlog(req, res) {
        try {
            const { id } = req.params;
            const blog = await BlogModel.findById(id).populate("author","name email");
            if (!blog) {
                return res.status(404).json({
                    message: "Blog not found",
                });
            }
            res.status(200).json({
                message: "Blog fetched successfully",
                blog: blog,
            });
        } catch (err) {
            console.log(err);
        }
    }

}

module.exports = new Controller()