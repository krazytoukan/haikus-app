require('dotenv').config()
const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  PORT = 3001,
  haikuRouter = require('./router/haikus')

mongoose.connect(process.env.MONGODB_URI,  {useNewUrlParser: true}, (err) => {
  console.log(err || "Successfully connected to MONGOD")
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.static('client/build'))


app.use('/api/haikus', haikuRouter)

app.use('*', (req, res) => {
  res.sendFile('client/build/index.html')
})

app.listen(PORT, (err) => {
  console.log(err || `It's alive`)
})
