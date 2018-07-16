require('dotenv').config()
const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  PORT = 3000,
  haikuRouter = require('./router/haikus')

mongoose.connect(process.env.MONGODB_URI,  {useNewURLParser: true}, (err) => {
  console.log(err || "Successfully connected to MONGOD")
})

app.use(logger('dev'))
app.use(express.json())


app.use('/api/haikus', haikuRouter)

app.listen(PORT, (err) => {
  console.log(err || `It's alive`)
})
