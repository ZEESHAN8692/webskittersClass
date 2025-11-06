const express = require('express');
const routeLabel = require('route-label');
const blogController = require('../../module/blog/controller/blog.controller');



const router = express.Router();
const namedRouter = routeLabel(router);


namedRouter.get('product-list','/product-list',(req,res)=>{
    res.send("Product List for admin")
} );




module.exports = router;