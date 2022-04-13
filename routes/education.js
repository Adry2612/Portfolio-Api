var express = require('express')
var educationController = require('../controllers/education')

var router = express.Router()

var multiparty = require('connect-multiparty')
router.get('/education', educationController.getEducation)
router.get('/get-education-images/:image', educationController.getImages)
module.exports = router;