const Education = require('../models/education')

var controller = {
    getEducation: function(req,res){
        Education.find({}).exec((err, education) => {
            if(err) return res.status(500).send({message: "Error en el servidor."})

            if(!education) return res.status(400).send({message: "No hay estudios que mostrar."})

            if(education) return res.status(200).send(education)
        })
    }
}

module.exports = controller