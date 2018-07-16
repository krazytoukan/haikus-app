const mongoose = require('mongoose')

const haikuSchema = mongoose.Schema({
  title: String, 
  body: String
})

const Haiku = mongoose.model('Haiku', haikuSchema)
module.exports = Haiku