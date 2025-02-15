


const mongoose = require("mongoose")
const empSchema = new mongoose.Schema({
    empno:{
        type:Number,
        required:true
    },

    empname:{
        type:String,
        required:true
    },
    empsub:{
        type:String,
        required:true
    },
    empcity:{
        type:String,
        required:true
    }
})

module.exports = new mongoose.model("empData",empSchema)