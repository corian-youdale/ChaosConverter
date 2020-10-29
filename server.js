const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs')

// const concreteNouns = require('./concreteNouns.json')

// const converterRoutes = require('./converter')

const server = express()

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: true}))


// Routes
// server.use('/', converterRoutes)

// server.get('/', (req,res)=>{
//   const viewData = {
//     concreteNouns
//   }
//   res.render('home', viewData)
// }

server.get('/', (req,res) => {
  res.render('home')
})



module.exports = server
