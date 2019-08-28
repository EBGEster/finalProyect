const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  chatToken: String,
  userPlans: [{type: Schema.Types.ObjectId, ref: 'Coupon'}],
  role: {type: String, default: "user"}
}, 
{timestamps: true })




const User = mongoose.model('User', userSchema)
module.exports = User