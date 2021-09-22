const Tecnology = require('../models/tecnology')

var controller = {
    getTecnologies: function(req,res){
        Tecnology.find({}).exec((err,tecnologies) => {
            if(err) return res.status(500).send({message: "Error en el servidor."})

            if(!tecnologies) return res.status(400).send({message: "No hay tecnologias que mostrar."})

            if(tecnologies) return res.status(200).send(tecnologies)
        })
    }
}

module.exports = controller