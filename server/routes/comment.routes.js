const express = require('express')
const router  = express.Router()

const Comment = require('../models/Comment.Model')
const Plan = require('../models/Plan.Model')
const Coupon = require('../models/Coupon.Model')

router.get('/getAllComments', (req, res) => {
    //req.params??
    Comment.find()
        .then(allComments => res.json(allComments))
        .catch(err => console.log('Error', err))
})

router.get('/getPlanComments/:id', (req, res)=> {
    console.log(req.params.id)
    Comment.find({plan: req.params.id})
            .populate("user")
            .then(allPlancomments => {
                console.log("somos los comentarios",allPlancomments)
                res.json(allPlancomments)})
            .catch(err => console.log('Error', err))

})

router.post('/createComment', (req, res) => {
    console.log("soy el reqbody que buscas",req.body)
    const{ couponId, user, plan, text,rate}= req.body
    Comment.create(req.body)
        // .populate('plan')
        .then(newComment => {
            console.log("soy el cupon",newComment.couponId)
            Coupon.findByIdAndUpdate( newComment.couponId, { $set: { rated: true} }, { new: true })
            .then(theNewComment => res.json(theNewComment))} )
            //res.json(newComment)})
        .catch(err => console.log('Error', err))
})

module.exports = router