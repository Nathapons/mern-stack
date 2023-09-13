const slugify = require('slugify')
const Blog = require('../model/blog')

exports.getBlogs = (req, res) => {
    Blog.find({}).exec((err, blog) => {
        res.json(blog).status(200)
    })
}

exports.createBlog = (req, res) => {
    const {title, content, author} = req.body
    const slug = slugify(title);

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
