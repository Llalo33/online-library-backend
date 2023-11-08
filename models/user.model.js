const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    userBookId : [{
        type : mongoose.SchemaTypes.Array,
        ref : 'Book'
    }],
    isBlocked : {
        type : Boolean,
        default : false
    }
    isAdmin : Boolean
})

const User = mongoose.model('User', userSchema)

module.exports = User
