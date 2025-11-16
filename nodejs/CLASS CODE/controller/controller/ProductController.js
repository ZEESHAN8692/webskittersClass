const Product = require('../model/product')
const { Validator } = require("node-input-validator");
const slugify = require('slugify')
const path=require('path')
const _ =require('lodash')
class ProductController {

    //****** */
    createProduct = async (req, res) => {
        try {
            const v = new Validator(req.body, {
                name: 'required|minLength:3',
                description: 'required|minLength:3',
                brand: 'required|minLength:3',
                price: 'required|minLength:3',
            });
            //console.log(v);
            let matched = await v.check().then((val) => val);
            if (!matched) {
                return res.status(404).json({
                    status: false,
                    error: v.errors,
                });
            }

            //**for multiple */
            const files = req.files
            let imagesPaths = [];
            const basePath = `${req.protocol}://${req.get('host')}/productimage/`;

            if (files) {
                files.map(file => {
                    imagesPaths.push(`${basePath}${file.filename}`);
                })
            }
            const { name } = req.body;
            let prod = new Product({
                name,
                description: req.body.description,
                //**for multiple */
                image: imagesPaths,
                brand: req.body.brand,
                price: req.body.price,
                slug: slugify(name),
            })

            const pro = await prod.save();
            if (!pro) {
                return res.status(500).send(
                    {
                        message: "product can not be create"
                    }
                )
            } else {
                return res.status(200).send({
                    data: pro,
                    message: "product added successfully"
                })
            }

        } catch (error) {
            console.log(error);
        }
    }



    allproduct=async(req,res)=>{
        try{
            const all=await Product.find({},{__v:0});

            // if(_.isEmpty(all)){
            //     return res.status(200).send({
            //         success: 200,
            //         counTotal: 0,
            //         message: "All data fetch successfully",
            //         data: [],
            //         });
            // }

            if(_isObject(all)){
                return res.status(200).send({
                    success: 200,
                    counTotal: 0,
                    message: "All data fetch successfully",
                    data: [],
                    });
            }
            const datas=_.sortBy(all,"name");
           return res.status(200).send({
            success: 200,
            counTotal: all.length,
            message: "All data fetch successfully",
            data: datas,
            });
          }catch (error) {
           //console.log(error);
           return res.status(500).send({
                success: false,
                message: "Erorr in getting fetch data",
              error: error.message,
            });
          }
     }

    slugproduct=async(req,res)=>{
        try{
            const slug=req.params.slug
            const slugall=await Product.find({slug});
           return res.status(200).send({
            success: 200,
            counTotal: slugall.length,
            message: "All data fetch successfully",
            data: slugall,
            });
          }catch (error) {
           //console.log(error);
           return res.status(500).send({
                success: false,
                message: "Erorr in getting fetch data",
              error: error.message,
            });
          }
     }

     
}



module.exports = new ProductController()