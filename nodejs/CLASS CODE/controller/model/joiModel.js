const mongoose = require("mongoose");
const joi = require("joi");
const joiuserSchema = new mongoose.Schema(
{
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
	},
	mobile: {
		type: String,
		maxlength: 10,
		required: true,
	},
	birthyear: {
		type: Number,
		max: 2000,
		min: 1900,
	},
	skillSet: {
		type: Array,
		default: [],
	},
	is_active: {
		type: Boolean,
		default: true,
	},
},
{ timestamps: true }
);

const joiUser = mongoose.model("joiuser", joiuserSchema);


//****joi Schema validation */

const validatorSchema =(data)=>{
	const schema =joi.object({
		name: joi.string().alphanum().min(3).max(25).trim(true).required(),
		email: joi.string().email().trim(true).required(),
		 //password: joi.string().min(8).trim(true).required(),
		 mobile: joi.string().length(10).pattern(/[6-9]{1}[0-9]{9}/).required(),
		 birthyear: joi.number().integer().min(1920).max(2000),
		 skillSet: joi.array().items(joi.string().alphanum().trim(true))
		.default([]),
		is_active: joi.boolean().default(true),
	});
	return schema.validate(data)
	
} 

module.exports ={
	validatorSchema,
	joiUser
}