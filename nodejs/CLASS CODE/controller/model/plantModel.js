const mongoosh = require('mongoose')
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');
const plantSchema = mongoosh.Schema({
    name:{
        type:String,
        // required:true
    },
    price:{
        type:String,
        // required:true
    },
   
})

plantSchema.plugin(mongooseAggregatePaginate);
const plantModel = mongoosh.model('plant',plantSchema)
module.exports = plantModel