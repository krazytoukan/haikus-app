const Haiku = require('../models/haiku')

exports.index = (req, res) => {
  Haiku.find({}, (err, haikus) => {
    if (err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: { haikus } })
    }
  })
}

exports.showHaiku = (req, res) => {
  Haiku.findById(req.params.id, (err, haiku) => {
    if (err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: { haiku } })
    }
  })
}

exports.create = (req, res) => {
  Haiku.create(req.body, (err, newHaiku) => {
    if (err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: {newHaiku} })
    }
  })
}

exports.update = (req, res) => {
  Haiku.update({ _id: req.params.id }, { $set: req.body }, (err, haikuById) => {
    if (err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: { haikuById } })
    }
  })
}

exports.destroy = (req, res) => {
  Haiku.findByIdAndRemove({ _id: req.params.id }, (err, deleteHaiku) => {
    if (err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: {deleteHaiku} })
    }
  })
}