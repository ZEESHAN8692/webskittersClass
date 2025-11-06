const express = require('express');
const routeLabel = require('route-label');





const router = express.Router();
const namedRouter = routeLabel(router);


namedRouter.get('products','/products',function(req,res){
    res.send("Product List for api")

} );




module.exports = router;