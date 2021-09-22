var mongoose = require('mongoose')
var Schema = mongoose.Schema()

var jobSchema = Schema({
    name: String,
    description: String,
    startDate: String,
    endDate: String,
    tecnologies: [String],
    icon: String
})

module.exports = mongoose.model('Job', jobSchema)