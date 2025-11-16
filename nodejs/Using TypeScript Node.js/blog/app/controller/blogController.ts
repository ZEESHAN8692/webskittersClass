import { Request, Response } from "express";
import { Blog } from "../model/blogModel";


class BlogController{
    async createBlog(req: Request, res: Response):Promise<any> {
        const {title,content}=req.body
        const author=req.user
        try {
            const newBlog=await Blog.create({title,content , author})
            res.status(200).send(newBlog)
        } catch (error) {
            console.log(error)
        }
        
    }


}

export const blogController=new BlogController