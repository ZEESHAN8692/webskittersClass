const mongoose = require('mongoose');

const unlinkimageSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,"name require"]
    },
    email: {
        type: String,
        required: [true,"email require"]
    },
   
    image: {
        type: String,
        default:"image" 
    },
   
},
{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model("unlinkImage", unlinkimageSchema);
