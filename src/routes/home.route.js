const express = require('express')
const router = express.Router()

const clubController = require('../app/controllers/club.controller')

router.get('/', clubController.renderHome)
router.post('/createClub', clubController.createClub)
router.delete('/:id/delete', clubController.deleteClub)

module.exports = router
