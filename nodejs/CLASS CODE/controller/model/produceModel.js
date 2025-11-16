const mongoose = require('mongoose');
const { on } = require('nodemon');
const Schema = mongoose.Schema;

const ProduceSchema = new Schema({

    fruit: {
        type: Array,
        required: true
    },
    in_stock: {
        oranges: {
            type: Number,
            required: true
        },
        apples: {
            type: Number,
            required: true
        } 
    },
    on_order: {
        oranges: {
            type: Number,
            required: true
        },
        apples: {
            type: Number,
            required: true
        }
    }
})
const ProduceModel = new mongoose.model('produce', ProduceSchema)
module.exports = ProduceModel

