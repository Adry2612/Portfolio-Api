var mongoose = require('mongoose')
var Schema = mongoose.Schema

var tecnologySchema = Schema({
    name: String,
    description: String,
    state: String,
    category: String,
    icon: String
})

module.exports = mongoose.model('Tecnology', tecnologySchema)