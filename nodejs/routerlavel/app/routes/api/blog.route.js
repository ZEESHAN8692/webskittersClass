const express = require('express');
const routeLabel = require('route-label');
const BlogController = require('../../webservice/BlogController');




const router = express.Router();
const namedRouter = routeLabel(router);


namedRouter.get('blog-list','/blog/list',BlogController.blogList );




module.exports = router;