const Tecnology = require('../models/tecnology')
const fs = require('fs')
const path = require('path')

var controller = {
    getTecnologies: function(req,res){
        Tecnology.find({}).exec((err,tecnologies) => {
            if(err) return res.status(500).send({message: "Error en el servidor."})

            if(!tecnologies) return res.status(400).send({message: "No hay tecnologias que mostrar."})

            if(tecnologies) return res.status(200).send(tecnologies)
        })
    },
    getImages: function(req, res){
        var file = req.params.image;
        var path_file = "./assets/tecnology-icons/"+file

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