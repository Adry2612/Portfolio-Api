var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// Archivos de rutas
var jobsRoutes = require('./routes/job')
var educationRoutes = require('./routes/education')
var tecnologyRoutes = require('./routes/tecnology')

// Middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// CORS 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Rutas
app.use('/api', jobsRoutes)
app.use('/api', educationRoutes)
app.use('/api', tecnologyRoutes)

module.exports = app