const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const commentSchema = new Schema({
  couponId: {type: Schema.Types.ObjectId, ref: 'Coupon' },
  username: String,
  plan: {type: Schema.Types.ObjectId, ref: 'Plan'},
  text: { type: String, required: true },
  rate: {type: Number}
}, {timestamps: true })




const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment