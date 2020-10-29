const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile') [environment]
const connection = require('knex')(config)

module.exports = {
    showSomething,
}

function showSomething (db = connection) {
    return db('databaseName')
    .select()
}