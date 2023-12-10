const mongoose = require("mongoose") ;
const Schema = mongoose.Schema;

const userSchema = Schema({
    name :{
        type : "string",
        required : true
    },
    email:{
        type : "string",
        required : true,
        unique : true
    },
    password : {
     type : "string",
     required : true,
     minlength : 6
    }
})

module.exports = mongoose.model('User',userSchema);