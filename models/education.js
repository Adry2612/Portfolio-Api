var mongoose = require('mongoose')
var Schema = mongoose.Schema

var educationSchema = Schema({
    name: String,
    description: String,
    startDate: String,
    endDate: String,
    icon: String
})

module.exports = mongoose.model('Education', educationSchema)