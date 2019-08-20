const express = require('express')
const router  = express.Router()

const Plan = require('../models/Plan.Model')

router.get('/getAllPlans', (req, res) => {
    Plan.find()
        .then(allPlans => res.json(allPlans))
        .catch(err => console.log('Error', err))
})

router.get('/getOnePlan/:id', (req, res) => {
    Plan.findById(req.params.id)
        .then(thePlan => res.json(thePlan))
        .catch(err => console.log('Error', err))
})

router.post('/postPlan', (req, res) => {
    Plan.create(req.body)
        .then(newPlan => res.json(newPlan))
        .catch(err => console.log('Error', err))
})

router.get('/deletePlan/:id', (req,res)=> {
    Plan.findOneAndDelete(req.params.id)
        .then(x => res.json(x))
        .catch(err => console.log('Error', err))
})


module.exports = router