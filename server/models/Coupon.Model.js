const mongoose = require('mongoose')
const Schema = mongoose.Schema

const couponSchema = new Schema({

    plan: {type: Schema.Types.ObjectId, ref: 'Plan'},
    companyName: String,
    title: String,
    description: String,
    price: Number,
    category: String,
    terms: String,
    imageUrl: String,
    address: String,
    city: String,
    expiration: Date,
    state: {type: String, default: "active"},
    email: String,
    username: String,
    rated: {trype: Boolean, default: false},
    commented: {type: Boolean, default: false}
})
const Coupon = mongoose.model('Coupon', couponSchema)
module.exports = Coupon