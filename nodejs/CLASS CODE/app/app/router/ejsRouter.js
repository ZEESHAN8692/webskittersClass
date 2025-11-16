const express = require('express');
const ejsController = require('../controller/ejsController');
const upload = require('../helper/studentImageUpload');

const Route = express.Router();

Route.get('/list', ejsController.list);
Route.get('/student-form', ejsController.StudentForm);
Route.post(
	'/student/create',
	upload.single('image'),
	ejsController.createStudent,
);
Route.get('/student/update/profile/:id', ejsController.updateForm);
Route.post(
	'/student/update/:id',
	upload.single('image'),
	ejsController.updateStudent,
);
Route.get('/student/delete/:id', ejsController.deleteStudent);

module.exports = Route;
