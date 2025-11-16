const { use } = require("passport");
const UserController = require("../controller/UserController");
const userimageUpload=require('../helper/userImage');
const { Auth } = require("../middleware/authHelper");

const router = require("express").Router();

/**
* @swagger
* /api/user/create:
*   post:
*     summary: create Account
*     tags:
*       - Auth
*     produces:
*       - application/json
*     consumes:
*       - multipart/form-data
*     parameters:
 *      - in: formData
 *        name: image
 *        type: file
 *      - in: formData
 *        name: name
 *        type: string
 *      - in: formData
 *        name: email
 *        type: string
 *      - in: formData
 *        name: mobile
 *        type: string
 *      - in: formData
 *        name: password
 *        type: string
 *      - in: formData
 *        name: first_school
 *        type: string
 *        description: Add user in MongoDB.
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password 
 *          properties:
 *            name:
 *              type: string
 *            email:
 *              type: string
 *            mobile:
 *              type: string
 *            password:
 *              type: string
 *            first_school:
 *              type: string
*     responses:
*        200:
*          description: user register successfully
*        400:
*          description: Bad Request
*        500:
*          description: Server Error
*/




router.post('/user/create',userimageUpload.single('image'),UserController.register);

/**
* @swagger
* /api/user/login:
*   post:
*     summary: user Login
*     tags:
*       - Auth
*     produces:
*       - application/json
*     parameters:
 *      - in: body
 *        name: user Login
 *        description: user login create.
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
*     responses:
*        200:
*          description: user Login successfully
*        400:
*          description: Bad Request
*        500:
*          description: Server Error
*/


router.post('/user/login',UserController.login);

/**
  * @swagger
  * /api/user/dashboard:
  *   get:
  *     summary: User dashboard
  *     tags:
  *       - Auth
  *     security:
  *       - Token: []
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: User access thuis page
  *       400:
  *         description: Bad Request
  *       500:
  *         description: Server Error
*/
router.get('/user/dashboard',Auth,UserController.dashboard);







module.exports = router;