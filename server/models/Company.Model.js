const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const companySchema = new Schema({
  username: { type: String, required: true },
  companyName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  vatNumber: {type: String, required: true},
  chatToken: String,
  plans: {type: Schema.Types.ObjectId, ref: 'Plan'}
}, 
{timestamps: true })




const Company = mongoose.model('Company', companySchema)
module.exports = Company