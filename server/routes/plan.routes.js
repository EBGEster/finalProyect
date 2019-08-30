const express = require('express')
const router  = express.Router()

const Plan = require('../models/Plan.Model')
const Company = require('../models/Company.Model');

router.get('/getAllPlans', (req, res) => {
    //console.log("SOY GET ALL PLANS")
    Plan.find()
        .then(allPlans => res.json(allPlans))
        .catch(err => console.log('Error', err))
})

router.get('/getCompanyPlans/:id', (req, res) => {
    // console.log(req.params)
    Plan.find({companyName: req.params.id})
        .then(allPlans => res.json(allPlans))
        .catch(err => console.log('Error', err))
})

router.get('/getOnePlan/:id', (req, res) => {
    // console.log("SOY YO", req.params.id)
    Plan.findById(req.params.id)
        .then(thePlan => res.json(thePlan))
        .catch(err => console.log('Error', err))
})

router.post('/postPlan', (req, res) => {
    //const{title, description, price, units, stock, category, terms, imageUrl, companyName, address, city, rate, votes, comments, location}=req.body
    Plan.create(req.body)
        .then(newPlan => {
            Company.findByIdAndUpdate(req.user._id, { $push: { plans: newPlan._id } }, { new: true })
            .populate("plans")
            .then(theNewPlan => res.json(theNewPlan) )
            
        })
        .catch(err => console.log('Error', err))
})

router.get('/deletePlan/:id', (req,res)=> {
    Plan.findOneAndDelete(req.params.id)
        .then(x => res.json(x))
        .catch(err => console.log('Error', err))
})


module.exports = router