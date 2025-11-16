const StudentModel = require('../model/studentModel');
const StoreModel = require('../model/store')
const flash = require('connect-flash')

//***for create student */

exports.createStudent=async(req,res)=>{
    //console.log(req.body);
    try{
        const {firstName,lastName,address,contact,email,course,fees}=req.body
        const sdata=new StudentModel({
            firstName,
            lastName,
            address,
            contact,
            email,
            course,
            fees
        })
        const result=await sdata.save()
       return res.status(200).json({
            result,
            message:'data added'
        })

    }catch(erorr){
        console.log(erorr);

    }

}

//****for paginate */
exports.getalldata = async (req, res) => {
    try {
        const gdata = await StudentModel.aggregate(
            [
                { $project: { __v: 0 } }
            ]
        )
        let options = {
            page: 1,
            limit: 2
        }
        let allRecord = await StudentModel.aggregatePaginate(gdata, options);
        //console.log('kk', allRecord);
        res.status(200).json({
            allRecord
        })

    } catch (error) {
        console.log(error);
    }

}
//****update student */

exports.updateStudentdata=async(req,res)=>{
    try{
     const updateData=await StudentModel.findByIdAndUpdate(
            // the id of the item to find
            req.params.id,
            // the change to be made. Mongoose will smartly combine your existing 
            // document with this change, which allows for partial updates too
            req.body,
            // an option that asks mongoose to return the updated version 
            // of the document instead of the pre-updated one.
            { new: true },
            // the callback function
    
        )
        return res.status(200).json({
            message:'data update successfully'
        }) 

    }catch(error){
        console.log(error);
    }

}

//*****delete student data */
exports.deleteStudentdata=async(req,res)=>{
    try{
        const id = req.params.id;

   const deletedata=await StudentModel.findByIdAndRemove(id)

   return res.status(200).json({
    message:'data delete successfully'
}) 
    }catch(error){
        console.log(error);
    }

}



//**addfileds */
exports.addfiled = async (req, res) => {
    try {
        const gdata = await StudentModel.aggregate(
            [
                { $project: { __v: 0 } },
                { $addFields: { "address.city": "bolpur" } },
                { $skip: 0 }
            ]
        )
        console.log('kk', gdata);
        res.status(200).json({
            count: gdata.length,
            gdata,

        })

    } catch (error) {
        console.log(error);
    }

}

//**** reat limit */
exports.addlimit = async (req, res) => {
    try {
        const gdata = await StudentModel.find()

        //console.log('kk',gdata);
        res.status(200).json({
            count: gdata.length,
            gdata,

        })

    } catch (error) {
        console.log(error);
    }

}

//replace root

exports.replaceRoot = async (req, res) => {
    try {
        const gdataa = await StudentModel.aggregate(
            [


                {
                    $replaceRoot: {
                        newRoot: {
                            full_name: {
                                $concat: ["$firstName", " ", "$lastName"]
                            }
                        }
                    }
                }
            ]
        )
        console.log('kk', gdataa);
        res.status(200).json({
            count: gdataa.length,
            gdataa,

        })

    } catch (error) {
        console.log(error);
    }

}


//*****add geo location***//
exports.geoNear = async (req, res) => {
    try {
        const addStoreData = new StoreModel({
            store_name: req.body.store_name,
            store_category: req.body.store_category,
            location: {
                type: "Point",
                coordinates: [parseFloat(req.body.longitude), parseFloat(req.body.latitude)]
            }
        })
        const getGeoData = await addStoreData.save()

        res.status(200).json({
            getGeoData,
        })

    } catch (error) {
        console.log(error);
    }

}









//********************For ui section *************************************** */

exports.index = (req, res) => {
    StudentModel.find((error, data) => {
        if (!error) {

            res.render('student-display', {
                title: 'Student Display',
                message: req.flash('message'),
                displayData: data
            },

            );
        }
    })
}
exports.registration = (req, res) => {
    res.render("student-reg", {
        title: "Student Registration"
    });
}

exports.registerStudent = (req, res) => {
    const Student = new StudentModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        contact: req.body.contactNumber,
        email: req.body.email,
        course: req.body.course,
        fees: req.body.fees,
    })
    Student.save().then((result) => {
        console.log(result, "Student Registration Successfull!!!");
        req.flash('message', 'Added Product Successfully')
        res.redirect('/');
    }).catch((error) => {
        console.log(error);

        res.redirect('/student-reg');
    })
}

exports.update = (req, res) => {
    StudentModel.findById(req.params.id, (error, data) => {
        if (!error) {
            res.render('edit-students', {
                title: "Edit Student",
                displayData: data
            })
        } else {
            res.render('/');
        }
    })
}

exports.updateStudent = (req, res) => {
    StudentModel.findByIdAndUpdate(req.params.id, { firstName: req.body.firstName, lastName: req.body.lastName, address: req.body.address, contact: req.body.contactNumber, email: req.body.email, course: req.body.course, fees: req.body.fees }, (error, data) => {
        if (!error) {
            console.log("Student Update");
            res.redirect('/');
        } else {
            console.log(error);
        }
    });
}

/* Hard Delete */

// exports.delete = (req, res) => {
//     StudentModel.findByIdAndRemove(req.params.id, (error, data) => {
//         if (!error) {
//             res.redirect('/');
//         } else {
//             console.log(error);
//             res.redirect('/');
//         }
//     })
// }

/* Soft Delete */

exports.delete = (req, res) => {
    StudentModel.findByIdAndUpdate(req.params.id, { status: 0 }, (error, data) => {
        if (!error) {
            res.redirect('/');
        } else {
            console.log(error);
            res.redirect('/');
        }
    })
}