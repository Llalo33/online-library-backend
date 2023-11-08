const {Router} = require('express')
const userController = require('../controllers/user.controller')

const router = Router()

router.get('', userController.getUsers)
router.get('/:id', userController.getUserById)
router.post('/users', userController.postUser)
router.post('/:id/takeBook', userController.takeBook)
router.post('/:id/returnBook', userController.returnBook)

module.exports = router
