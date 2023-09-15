const express = require('express')
const router = express.Router()

const {getBlogs, singleBlog, createBlog} = require('../controller/blog')

router.get('/blog', getBlogs)
router.post('/blog', createBlog)
router.get('/blog/:slug', singleBlog)

module.exports = router
