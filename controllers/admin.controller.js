const Book = require('../models/Book.model')
const User = require('../models/User.model')

const adminsController = {
    blockUser : async (req, res) => {
        try {
            const deleteUser = await User.findById(req.params.id)
            deleteUser.userBookId.forEach( async (element) => {
                await Book.findByIdAndUpdate(element, {bookBorrowerId : ""})
            });
            await User.findByIdAndUpdate(req.params.id , {
                isBlock : true,
                userBookId : []
            })
            res.json(`This user is blocked`)
        } catch (error) {
            res.json(error)
        }
    },
    unlockUser : async (req, res) => {
        try {
            await User.findByIdAndUpdate(req.params.id , {
                isBlock : false
            })
            res.json(`This user is unblocked`)
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = adminsController