var express = require('express')
var jobController = require('../controllers/job')
var multiparty = require('connect-multiparty')
var router = express.Router()

router.get('/jobs', jobController.getJobs)
router.get('/get-jobs-image/:image', jobController.getImages)

module.exports = router;