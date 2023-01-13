const Job = require('../models/job')
const fs = require('fs')
const path = require('path')

var controller = {
    getJobs: function(req, res) {
        Job.find({}).sort({startDate: 1}).exec((err, jobs) => {
            if(err) return res.status(500).send({message: "Error en el servidor"})

            if(!jobs) return res.status(400).send({message: "No hay empleos que mostrar."})

            if(jobs) return res.status(200).send(jobs)
        })
    },

    getImages: function(req, res){
        var file = req.params.image;
        var path_file = "./assets/job-icons/"+file

        fs.access(path_file, (exists) => {
            if(!exists){
                return res.sendFile(path.resolve(path_file))
            } else{
                return res.status(200).send({message: "No existe la imagen..."})
            }
        })
    }
}

module.exports = controller