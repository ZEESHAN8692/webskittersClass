const Student = require('../model/student');
const {
	uploadOnCloudinary,
	deleteResourceFromCloudinary,
} = require('../helper/cloudinaryHelper');

class EjsController {
	async list(req, res) {
		try {
			const data = await Student.find().sort({ createdAt: -1 });
			res.render('list', {
				data: data,
			});
		} catch (error) {
			console.log(error.message);
		}
	}

	async StudentForm(req, res) {
		try {
			res.render('add', {
				title: 'add student',
			});
		} catch (error) {
			console.log(error.message);
		}
	}

	async updateForm(req, res) {
		try {
			const { id } = req.params;
			const student = await Student.findById(id);
			if (!student) {
				throw new Error('Student not found with this ID');
			}

			res.render('update', { title: 'update student', data: student });
		} catch (error) {
			console.log(error.message);
		}
	}

	async updateStudent(req, res) {
		try {
			const { id } = req.params;
			const { name, email, phone } = req.body;
			// const studentImageLocalFilePath = req.file.path;

			const student = await Student.findById(id);
			if (!student) {
				throw new Error('Student not found with this ID');
			}

			let updatedImage;
			if (req.file) {
				// Delete previous Image
				await deleteResourceFromCloudinary(student?.image?.public_id);
				// Upload current image
				updatedImage = await uploadOnCloudinary(req.file.path);
			}

			// Updated in Database
			const updatedStudent = await Student.findByIdAndUpdate(
				id,
				{
					$set: {
						name,
						email,
						phone,
						image: {
							secure_url: updatedImage?.secure_url,
							public_id: updatedImage?.public_id,
						},
					},
				},
				{ new: true },
			);
			console.log(updatedStudent);
			if (student) {
				res.redirect('/list');
			} else {
				res.redirect('/update');
			}
		} catch (error) {
			console.log(error.message);
		}
	}

	async createStudent(req, res) {
		try {
			const { name, email, phone } = req.body;
			const studentProfileImageLocalFilePath = req.file.path;

			const cloudinaryResponse = await uploadOnCloudinary(
				studentProfileImageLocalFilePath,
			);

			const newUser = await Student.create({
				name,
				email,
				phone,
				image: {
					secure_url: cloudinaryResponse.secure_url,
					public_id: cloudinaryResponse.public_id,
				},
			});

			if (newUser) {
				res.redirect('/list');
			} else {
				res.redirect('/add');
			}
		} catch (error) {
			console.log(error.message);
		}
	}

	async deleteStudent(req, res) {
		try {
			const id = req.params.id;
			const deletedStudent = await Student.findByIdAndDelete(id);

			await deleteResourceFromCloudinary(deletedStudent?.image?.public_id);
			if (deletedStudent) {
				res.redirect('/list');
			}
		} catch (error) {
			console.log(error.message);
		}
	}
}

module.exports = new EjsController();
