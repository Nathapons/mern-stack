const slugify = require('slugify')

exports.create = (req, res) => {
    const {title, content, author} = req.body
    const slug = slugify(title);
    res.json({
        data: {title, content, author, slug},
    })
}
