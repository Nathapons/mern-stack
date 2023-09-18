const express = require('express')
const router = express.Router()

const {getBlogs, singleBlog, createBlog, updateBlog, deleteBlog} = require('../controller/blog')

router.get('/blog', getBlogs)
router.get('/blog/:slug', singleBlog)
router.post('/blog', createBlog)
router.put('/blog/:slug', updateBlog)
router.delete('/blog/:slug', deleteBlog)

module.exports = router
