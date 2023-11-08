const express = require('express')
const bookController = require('../controllers/book.controller')
const genresController = require('../controllers/genres.controller')
const userController = require('../controllers/user.controller')
const adminController = require('../controllers/admin.controller')


const rout = express()

rout.post('/book', bookController.postBook)
rout.patch('/book/:id', bookController.patchBook)
rout.delete('/book/:id', bookController.deleteBook)

rout.post('/genres', genresController.postGenres)
rout.patch('/genres/:id', genresController.patchGenres)
rout.delete('/genres/:id', genresController.deleteGenres)

rout.post('/users', userController.postUser)
rout.patch('/users/:id', userController.patchUser)
rout.delete('/users/:id', userController.deleteUser)

rout.get('/users/block/:id', adminController.blockUser)
rout.get('/users/unlock/:id', adminController.unlockUser)

module.exports = rout