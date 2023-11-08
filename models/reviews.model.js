const mongoose = require('mongoose')

const reviewsSchema = mongoose.Schema({
    name : String,
    reviewsBookId : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'Book'
    },
    renter : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'User',
        default : null
    }
})

const Reviews = mongoose.model('Reviews', reviewsSchema)

module.exports = Reviews
