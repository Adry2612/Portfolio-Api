var express = require('express')
var tecnologyController = require('../controllers/tecnology')

var router = express.Router()

router.get('/tecnologies', tecnologyController.getTecnologies)

module.exports = router;