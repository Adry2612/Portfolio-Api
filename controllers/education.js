const Education = require('../models/education')
const fs = require('fs')
const path = require('path')

var controller = {
    getEducation: function(req,res){
        Education.find({}).sort({startDate: -1}).exec((err, education) => {
            if(err) return res.status(500).send({message: "Error en el servidor."})

            if(!education) return res.status(400).send({message: "No hay estudios que mostrar."})

            if(education) return res.status(200).send(education)
        })
    },

    getImages: function(req, res){
        var file = req.params.image;
        var path_file = "./assets/education-icons/"+file

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