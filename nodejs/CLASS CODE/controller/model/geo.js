const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const geoSchema = new Schema({
    username: {
        type: Schema.Types.String,
        unique: true,
        lowercase: true,
    },
    location: {
        type: {
            type: Schema.Types.String,
            enum: ["Point"],
            required: true,
        },
        coordinates: {
            type: [Schema.Types.Number],
            required: true,
        },
    },
},
{
    timestamps: true,
    versionKey: false,
})


geoSchema.index({
    location: "2dsphere",
});

const  Geo = mongoose.model('Geo', geoSchema);
module.exports = Geo;