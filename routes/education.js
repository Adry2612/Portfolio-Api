var express = require('express')
var educationController = require('../controllers/education')

var router = express.Router()

router.get('/education', educationController.getEducation)

module.exports = router;