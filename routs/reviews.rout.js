const {Router} = require('express')
const reviewsController = require('../controllers/reviews.controller')


const router = Router()

router.get('', reviewsController.getReviews)
router.post('', reviewsController.postReviews)
router.patch('/:id', reviewsController.patchReviews)
router.delete('/:id', reviewsController.deleteReviews)

module.exports = router
