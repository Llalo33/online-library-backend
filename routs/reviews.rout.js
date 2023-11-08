const express = require('express')
const reviewsController = require('../controllers/reviews.controller')


const rout = express()

rout.get('', reviewsController.getReviews)
rout.post('', reviewsController.postReviews)
rout.patch('/:id', reviewsController.patchReviews)
rout.delete('/:id', reviewsController.deleteReviews)

module.exports = rout