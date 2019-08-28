const express = require('express')
const router  = express.Router()

const Coupon = require('../models/Coupon.Model')
const User = require('../models/User.Model')

const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.PASSWORD}`
    }
})

router.post('/createCoupon', (req, res) => {

    Coupon.create(req.body)
    .then(newCoupon =>{
        //console.log(req.user._id, newCoupon)
        User.findByIdAndUpdate(req.user._id, { $push: { userPlans: newCoupon._id } }, { new: true })
            .then(user => {
               // console.log(user, "busquser")
                res.json(newCoupon)
            })
        
    })
    .catch(err => console.log('Error', err))
})

router.get('/getAllCoupons', (req, res) => {
    console.log("soy el user",req.user)
    User.findById(req.user.id)
        .populate('userPlans')
        .then(user=> {
            console.log(user)
            res.json(user)})
    
        .catch(err => console.log('Error', err))
})

router.get('/getUserCoupons/:id', (req, res) => {
    console.log(req.params)
    Coupon.find({username: req.params.id})
        .then(allCoupons => res.json(allCoupons))
        .catch(err => console.log('Error', err))
})

router.post('/updateCoupon/:id', (req, res) => {
    console.log("soy el reqparams", req.params)
    Coupon.findByIdAndUpdate({_id: req.params.id}, { $set: { state: "redeemed"} }, { new: true })
        .populate('userPlans')
        .then(updatedCoupon => {
            console.log("soy el cupom", updatedCoupon.email)
            transporter.sendMail({
                from: '"Disfruton App" <process.env.EMAIL>',
                to: updatedCoupon.email,
                subject: 'Valora tu experiencia con Disfruton App',
                text: 'Mensaje de bienvenida',
                html:  `<h2>Ahora que ya has disfrutado</h2>
                <p>You can start sharing your favourites worlds locations with the other user and discover
                where can you go in your next travel, what can you do there and why have to go, the triple 'W' + I do.</p>
                <p>Thank you for your registration and enjoy!</p>
                <img src=https://res.cloudinary.com/dpkvkfi5u/image/upload/v1564399013/wIdo-gallery/logo-wIdo.png.png>`
            })
            res.json(updatedCoupon)} )
        .catch(err => console.log('Error', err))
})

module.exports = router