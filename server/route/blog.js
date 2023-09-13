const express = require('express')
const router = express.Router()

const {getBlogs, createBlog} = require('../controller/blog')

router.get('/blog', getBlogs)
router.post('/blog', createBlog)

module.exports = router
