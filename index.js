var mongoose = require('mongoose')
require('dotenv').config()
var app = require('./app')
var port = process.env.PORT || 3700

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.bqv0s.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(port, () => {
            console.log(`Servidor funcionando correctamente en el puerto: ${port}`)
        })
    })
    .catch(err => console.log(err))