const express = require('express')


const db = require('./db')

const router = express.Router()

router.get('/', (req, res) =>{
    db.showSomething()
    
    res.render()
})


module.exports = router