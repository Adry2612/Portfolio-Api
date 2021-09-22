var express = require('express')
var jobController = require('../controllers/job')

var router = express.Router()

router.get('/jobs', jobController.getJobs)

module.exports = router;