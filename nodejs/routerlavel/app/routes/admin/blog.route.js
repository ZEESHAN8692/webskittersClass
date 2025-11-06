const express = require('express');
const routeLabel = require('route-label');
const blogController = require('../../module/blog/controller/blog.controller');



const router = express.Router();
const namedRouter = routeLabel(router);


namedRouter.get('blog-list','/blog/list',blogController.blogList );




module.exports = router;