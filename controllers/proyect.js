const Proyect = require('../models/proyect')
const fs = require('fs')
const path = require('path')

var controller = {
    getProyects: function(req,res){
        Proyect.find({}).exec((err,proyects) => {
            if(err) return res.status(500).send({message: "Error en el servidor."})

            if(!proyects) return res.status(400).send({message: "No hay proyectos que mostrar."})

            if(proyects) return res.status(200).send(proyects)
        })
    },
    getImages: function(req, res){
        var file = req.params.image;
        var path_file = "./assets/proyect-images/"+file

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