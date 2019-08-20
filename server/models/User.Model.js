const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const userSchema = new Schema({
  username: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  creditCard: {type: String},
  photo: String,
  chatToken: String,
  plans: {type: Schema.Types.ObjectId, ref: 'Plan'}
}, 
{timestamps: true })




const User = mongoose.model('User', userSchema)
module.exports = User