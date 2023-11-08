const express = require('express')
const genresController = require('../controllers/genres.controller')


const rout = express()

rout.get('', genresController.getGenres)

module.exports = rout