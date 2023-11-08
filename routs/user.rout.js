const express = require('express')
const userController = require('../controllers/user.controller')

const rout = express()

rout.get('', userController.getUsers)
rout.get('/:id', userController.getUserById)
rout.post('/users', userController.postUser)
rout.post('/:id/takeBook', userController.takeBook)
rout.post('/:id/returnBook', userController.returnBook)

module.exports = rout
