const express = require('express')
const bookController = require('../controllers/book.controller')


const rout = express()

rout.get('', bookController.getBook)
rout.get('/:id', bookController.getBookById)

module.exports = rout