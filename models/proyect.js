var mongoose = require('mongoose')
var Schema = mongoose.Schema

var proyectSchema = Schema({
    name: String,
    img: String,
    deploy_url: String,
    repo_url: String,
    labels: String
})

module.exports = mongoose.model('Proyect', proyectSchema)