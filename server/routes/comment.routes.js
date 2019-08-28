const express = require('express')
const router  = express.Router()

const Comment = require('../models/Comment.Model')
const Plan = require('../models/Plan.Model')

router.get('/getAllComments', (req, res) => {
    //req.params??
    Comment.find()
        .then(allComments => res.json(allComments))
        .catch(err => console.log('Error', err))
})

router.get('/getPlanComments', (req, res)=> {
    Comment.find({plan: req.params.id})
            .then(allPlancomments => res.json(allPlancomments))
            .catch(err => console.log('Error', err))

})

router.post('/createComment', (req, res) => {
    Comment.create(req.body)
        .populate('user')
        .then(newComment => res.json(newComment))
        .catch(err => console.log('Error', err))
})

module.exports = router