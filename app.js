var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// Archivos de rutas

// Middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// CORS 

// Rutas

module.exports = app