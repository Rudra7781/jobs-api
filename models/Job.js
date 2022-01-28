const mongoose = require("mongoose");


const JobSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true,'Please provide Company'],
        maxlength:20
    },
    position:{
        type:String,
        required:[true,'Please provide Position'],
        maxlength:30
    },
    status:{
        type:String,
        enum:['interview','declined','pending'],
        default:'pending',
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'Please provide the user']
    }
},{timestamps:true})

//timestemp is use to represent created at(show when it's created/updated) and updated at in mongoosedb

module.exports = mongoose.model('Job',JobSchema)