const express = require('express');
const routeLabel = require('route-label');





const router = express.Router();
const namedRouter = routeLabel(router);


namedRouter.get('test','/test',function(req,res){
    res.send("tset api")

} );




module.exports = router;