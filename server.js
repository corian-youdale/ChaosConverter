const express = require('express')
const hbs = require('express-handlebars')
const route = require('./routes')

const server = express()

// const fs = require('fs') //reading json files?
// const router = express.Router() 

// const concreteNouns = require('./concreteNouns.json')
// const converterRoutes = require('./converter')


// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))

server.set('view engine', 'hbs')
server.use(express.static(__dirname + '/public'))
server.use(express.urlencoded({extended: true}))

server.use('/', route)



module.exports = server
