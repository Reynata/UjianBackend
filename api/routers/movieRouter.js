const express = require('express')
const { movieController }= require('../controllers')

const router = express.Router()

router.post('/postmovie', movieController.postMovie)
router.get('/getmovie', movieController.getMovie)

module.exports = router