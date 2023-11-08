const {Router} = require('express')
const bookController = require('../controllers/book.controller')

const router = Router()

router.get('', bookController.getBook)
router.get('/:id', bookController.getBookById)

module.exports = router
