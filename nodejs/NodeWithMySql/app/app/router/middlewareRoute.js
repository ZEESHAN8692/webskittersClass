const express = require('express');
const router = express.Router();
const { logRequest, isAuthenticated, validateBody, handleRequest } = require('../middleware/CheckAuth');
const MiddlewareController = require('../controller/MiddlewareController');

// router.use(logRequest);
// router.use(isAuthenticated);
// router.use(validateBody);

router.post('/test', validateBody,handleRequest, MiddlewareController.index);

module.exports = router;