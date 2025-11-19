// validation/userValidation.js
const Joi = require('joi');

const addressSchema = Joi.object({
    street: Joi.string().required(),
    suite: Joi.string().required(),
    city: Joi.string().required(),
    zipCode: Joi.string().required(),
    geo: Joi.object({
        lat: Joi.number().required(),
        lng: Joi.number().required(),
    }).required(),
});

const companySchema = Joi.object({
    name: Joi.string().required(),
    catchPhrase: Joi.string().required(),
    bs: Joi.string().required(),
});

const employeeValidationSchema = Joi.object({
    name: Joi.string().required(),
    userName: Joi.string().required(),
    email: Joi.string().email().required(),
    address: addressSchema,
    phone: Joi.string().required(),
    website: Joi.string().uri().required(),
    company: companySchema,
});

module.exports = { employeeValidationSchema };
