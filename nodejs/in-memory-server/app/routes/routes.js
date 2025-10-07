import express from 'express';
import userController from '../controller/userController.js';
import jqueryController from '../controller/jqueryController.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});


router.post("/create-user", userController.createUser)
router.get("/users", userController.getUsers)


// Jquery

router.get("/jquery", jqueryController.index)

export default router;