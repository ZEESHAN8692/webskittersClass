const router = require("express").Router();
const StudentController = require("../controller/studentController");
const verify = require("../middleware/errorCheck");

//for ui route
router.get('/', StudentController.index);
router.get('/registration', StudentController.registration);
router.post('/registration', StudentController.registerStudent);
router.get('/update/(:id)', StudentController.update);
router.post('/update/(:id)', StudentController.updateStudent);
router.get('/delete/(:id)', StudentController.delete);


//for Api route

  /**
 * @swagger
 * /api/getstudent:
 *  get:
 *    summary: Get all the student from Database
 *    tags:
 *       - Student
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: data fetched successfully.
 */
router.get('/getstudent',StudentController.getalldata)
/**
* @swagger
* /api/create/student:
*   post:
*     summary: create Student
*     tags:
*       - Student
*     produces:
*       - application/json
*     parameters:
 *      - in: body
 *        name: Add student
 *        description: Add student in MongoDB.
 *        schema:
 *          type: object
 *          required:
 *            - firstName
 *            - lastName
 *            - address
 *            - contact
 *            - email
 *            - course
 *            - fees
 *          properties:
 *            firstName:
 *              type: string
 *            lastName:
 *              type: string
 *            address:
 *              type: string
 *            contact:
 *              type: string
 *            email:
 *              type: string
 *            course:
 *              type: string
 *            fees:
 *              type: string
*     responses:
*        200:
*          description: student data added
*        400:
*          description: Bad Request
*        500:
*          description: Server Error
*/

router.post('/create/student',StudentController.createStudent)


 /**
 * @swagger
 * /api/update/student/{id}:
 *  put:
 *    summary: Used to update student in DB
 *    tags:
 *      - Student
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id        
 *      - in: body
 *        name: Update student
 *        description: Update student in DB.
 *        schema:
 *          type: object
 *          required:
 *            - firstName
 *            - lastName
 *          properties:
 *            firstName:
 *              type: string
 *            lastName:
 *              type: string
 *            address:
 *              type: string
 *            contact:
 *              type: string
 *            email:
 *              type: string
 *            course:
 *              type: string
 *            fees:
 *              type: string
 *    responses:
 *      '200':
 *        description: student update updated successfully.
 */

router.put('/update/student/:id', StudentController.updateStudentdata);

/**
 * @swagger
 * /api/delete/student/{id}:
 *  delete:
 *    summary: Removes student item from DB.
 *    tags:
 *      - Student
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Remove student from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *    responses:
 *      '200':
 *        description: Food removed successfully.
 */
router.delete('/delete/student/:id', StudentController.deleteStudentdata);




router.get('/getstudent/addfiled',StudentController.addfiled)
router.get('/getstudent/ralimit',StudentController.addlimit)
router.get('/getstudent/replaceroot',StudentController.replaceRoot)

router.post('/add/geo/location',StudentController.geoNear)
module.exports = router;