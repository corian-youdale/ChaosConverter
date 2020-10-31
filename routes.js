const express = require('express')
const router = express.Router()
const db = require('./db')



router.get('/', (req,res) => {
    res.render('home')

  })

router.get('/result', (req,res) => {
  res.render('result')

})

module.exports = router