const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name : {
        type: String
    },
    email : {
        type: String
    },
    phone : {
        type: String
    },
    password : {
        type: String
    },
    /* this is admin field, we will specify the admin explicitly in the database, yet it will be Employee in the database  */
    userType : {
        type: String,
        default: 'Employee'
    },

    aws_answers : {
        type : Array,
        default: []
    },

    sql_answers : {
        type: Array,
        default: []
    },

    python_answers : {
        type : Array,
        default: []
    }
    
}, {timestamps: true})

const User = mongoose.model('User', userSchema)
module.exports = User