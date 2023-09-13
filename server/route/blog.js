const express = require('express')
const router = express.Router()

const {create} = require('../controller/blog')

router.get('/blog', create)

module.exports = router
