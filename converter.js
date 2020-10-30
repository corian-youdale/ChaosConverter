const express = require('express')


const db = require('./db')

const router = express.Router()

router.get('/', (req, res) =>{
    db.showSomething()
    
    res.render()
})

button.onclick 
// listen()
// function listen (){
//     document.addEventListener('click')
// }

function randomQuantity(){
    return Math.random(100)
}

const depositQuantity = document.getElementById('depositQuantity')
const depositType = document.getElementById('depositType')
const convertedQuantity = document.getElementById('convertedQuantity')
const convertedType = document.getElementById('convertedType')
// const button = event.target.value

function runConverter () {
    convertedQuantity = randomQuantity()
}

$("button").on('click', ()=>{
    var depositQuantity = $(this).text()
    $("#answer").val
})



module.exports = router