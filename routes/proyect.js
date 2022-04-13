var express = require('express')
var proyectController = require('../controllers/proyect')

var router = express.Router()

var multiparty = require('connect-multiparty')

router.get('/proyects', proyectController.getProyects)
router.get('/get-proyect-images/:image', proyectController.getImages)
module.exports = router;