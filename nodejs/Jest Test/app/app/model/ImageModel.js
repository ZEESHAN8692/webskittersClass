
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ImageSchema = new Schema({
    name: {
        type: String,
        required: true  
    },
    imageUrl: {
        type: String,           
    },
    imagePublicId: {
        type: String,           
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)

    const ImageModel = mongoose.model('image', ImageSchema);
    module.exports = ImageModel