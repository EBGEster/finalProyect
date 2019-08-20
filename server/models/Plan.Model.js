const mongoose = require('mongoose')
const Schema = mongoose.Schema

const planSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    units:{type:Number, required: true},
    category:{type: String, required: true, enum:["beauty", "gastro", "automotive", "leisure", "health-and-fitness"]},
    terms:  {type: String, required: true},
    imageUrl: { type: String, required: true },
    companyName: {type: String, required: true},
    address: {type: String, required:true},
    city: {type: String, required: true},
    rate: {type: Number},
    votes: {type: Number},
    comments : {
        user: {type: String},
        comment:{type: String}
    },
    location: {
        lat: {type: Number, required: true},
        lng:  {type: Number, required: true}
    }
}, { timestamps: true })

const Plan = mongoose.model('Plan', planSchema)
module.exports = Plan
