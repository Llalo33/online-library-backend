const Book = require('../models/Book.model')

const booksController = {
    getBook : async (req, res) => {
        try {
            const book = await Book.find()
            res.json(book)
        } catch (error) {
            res.json(error)
        }
    },
    postBook : async (req, res) => {
        try {
            const book = await Book.create({
                name : req.body.name,
                bookGenresId : req.body.bookGenresId,
                bookBorrowerId : req.body.bookBorrowerId
            })
            res.json(book)
        } catch (error) {
            res.json(error)
        }
    },
    patchBook : async (req, res) => {
        try {
            const book = await Book.findByIdAndUpdate(req.params.id , {
                name : req.body.name,
                bookGenresId : req.body.bookGenresId,
                bookReviewsId : req.body.bookReviewsId,
                bookBorrowerId : req.body.bookBorrowerId
            })
            res.json(book)
        } catch (error) {
            res.json(error)
        }
    },
    deleteBook : async (req, res) => {
        try {
            const book = await Book.findByIdAndRemove(req.params.id)
            res.json(book)
        } catch (error) {
            res.json(error)
        }
    },
    getGenreOfBookk : async (req, res) => {
        try {
            const book = await Book.findById({bookGenresId : req.params.id}).populate('genres')
            res.json(book)
        } catch (error) {
            res.json(error)
        }
    },
    getBookById : async (req, res) => {
        try {
            const book = await Book.findById(req.params.id)
            res.json(book)
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = booksController
