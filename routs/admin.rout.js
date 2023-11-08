const {Router} = require('express')
const bookController = require('../controllers/book.controller')
const genresController = require('../controllers/genres.controller')
const userController = require('../controllers/user.controller')
const adminController = require('../controllers/admin.controller')

const router = Router()

router.post('/book', bookController.postBook)
router.patch('/book/:id', bookController.patchBook)
router.delete('/book/:id', bookController.deleteBook)

router.post('/genres', genresController.postGenres)
router.patch('/genres/:id', genresController.patchGenres)
router.delete('/genres/:id', genresController.deleteGenres)

router.patch('/users/:id', userController.patchUser)
router.delete('/users/:id', userController.deleteUser)

router.get('/users/block/:id', adminController.blockUser)
router.get('/users/unlock/:id', adminController.unlockUser)

module.exports = router
