const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  plan: {type: Schema.Types.ObjectId, ref: 'Plan'},
  text: { type: String, required: true }
}, {timestamps: true })




const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment