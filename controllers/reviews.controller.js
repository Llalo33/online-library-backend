const Reviews = require('../models/reviews.model')

const reviewsController = {
    getReviews : async (req, res) => {
        try {
            const reviews = await Reviews.find()
            res.json(reviews)
        } catch (error) {
            res.json(error)
        }
    },
    postReviews : async (req, res) => {
        try {
            const reviews = await Reviews.create({
                name : req.body.name,
                reviewsBookId : req.body.reviewsBookId
            })
            res.json(reviews)
        } catch (error) {
            res.json(error)
        }
    },
    patchReviews : async (req, res) => {
        try {
            const reviews = await Reviews.findByIdAndUpdate(req.params.id , {
                name : req.body.name,
                reviewsBookId : req.body.reviewsBookId
            })
            res.json(reviews)
        } catch (error) {
            res.json(error)
        }
    },
    deleteReviews : async (req, res) => {
        try {
            const reviews = await Reviews.findByIdAndRemove(req.params.id)
            res.json(reviews)
        } catch (error) {
            res.json(error)
        }
    },
}

module.exports = reviewsController