const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newuser = new Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }

})
mongoose.model('registro', newuser)
