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
    rated: {type: Boolean, default: false},
    commented: {type: Boolean, default: false}
}, { timestamps: true })
const Coupon = mongoose.model('Coupon', couponSchema)
module.exports = Coupon