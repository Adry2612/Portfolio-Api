var express = require('express')
var tecnologyController = require('../controllers/tecnology')

var router = express.Router()

var multiparty = require('connect-multiparty')

router.get('/tecnologies', tecnologyController.getTecnologies)
router.get('/get-image/:image', tecnologyController.getImages)
module.exports = router;