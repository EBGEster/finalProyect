const mongoose = require('mongoose')
const Schema = mongoose.Schema

const planSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    units:{type:Number, required: true},
    imageUrl: { type: String, required: true },
    companyName: {type: String, required: true},
    address: {type: String, required:true},
    city: {type: String, required: true}
}, { timestamps: true })

const Plan = mongoose.model('Plan', planSchema)
module.exports = Plan
