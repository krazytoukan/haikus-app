const mongoose = require('mongoose')

const HaikuSchema = mongoose.Schema({
  title: String, 
  body: String
})

const Haiku = mongoose.model('Haiku', HaikuSchema)
module.exports = Haiku