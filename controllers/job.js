const Job = require('../models/job')

var controller = {
    getJobs: function(req, res) {
        Job.find({}).exec((err, jobs) => {
            if(err) return res.status(500).send({message: "Error en el servidor"})

            if(!jobs) return res.status(400).send({message: "No hay empleos que mostrar."})

            if(jobs) return res.status(200).send(jobs)
        })
    }
}

module.exports = controller