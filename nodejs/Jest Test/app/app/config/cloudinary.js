const cloudinary = require('cloudinary').v2;

const cloudinary_js_config = cloudinary.config({
  cloud_name: process.env.CLUDINARY_NAME || 'dydptmn7s',
  api_key: process.env.CLUDINARY_KEY || '678943972781397',
  api_secret: process.env.CLUDINARY_SECRET || 'nstmkK7ppd-8MXWHB85sjhkjtJM',
});

module.exports = { cloudinary_js_config };