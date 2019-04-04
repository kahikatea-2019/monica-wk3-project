const express = require('express')
const hbs = require('express-handlebars')

const studentRoutes = require('./routes/students')
// const profileRoutes = require('./routes/profile')

const server = express()

// M I D D L E W A R E

server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))

// R O U T E S

server.use('/', studentRoutes)

module.exports = server
