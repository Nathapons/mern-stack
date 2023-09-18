const slugify = require('slugify')
const Blog = require('../model/blog')
const { v4: uuidv4 } = require('uuid');

exports.getBlogs = (req, res) => {
    Blog.find({}).then((blogs) => {
        res.json(blogs)
    }).catch((err) => {
        res.json({error: err})
    })
}

exports.singleBlog = (req, res) => {
    const { slug } = req.params
    Blog.findOne({slug}).then((blog) => {
        res.json(blog)
    }).catch((err) => {
        res.json({error: err})
    })
}

exports.createBlog = (req, res) => {
    const {title, content, author} = req.body
    const slug = uuidv4();

    switch (true) {
        case !title:
            return res.status(400).json({error: 'ไม่มีชื่อบทความ'})
            break;
        case !content:
            return res.status(400).json({error: 'ไม่มีเนิ้อหาบทความ'})
            break;
    }
    Blog.create({title, content, author, slug}).then((blog) => {
        res.json(blog).status(201)
    }).catch(
        (e) => res.json({error: e})
    )
}

exports.updateBlog = (req, res) => {
    const { slug } = req.params
    const { title, content, author} = req.body
    Blog.findOneAndUpdate({slug}, {title, content, author}, {new: true}).then((blog) => {
        res.json(blog)
    }).catch(
        (e) => res.json({error: e})
    )
}

exports.deleteBlog = (req, res) => {
    const { slug } = req.params
    Blog.deleteOne({slug}).then(() => {
        Blog.find({}).then((blogs) => {
            res.json(blogs)
        }).catch(
            (e) => res.json({error: e})
        )
    }).catch(
        (e) => res.json({error: e})
    )
}
