var mongoose = require('mongoose')
var app = require('./app')
var port = 3700

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portfolio')
    .then(() => {
        app.listen(port, () => {
            console.log('Servidor funcionando correctamente en la url: http://localhost/3700')
        })
    })
    .catch(err => console.log(err))