const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    name : String,
    bookGenresId : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'Genres'
    },
    bookReviewsId : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'Reviews'
    },
    bookBorrowerId : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'User'
    }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book