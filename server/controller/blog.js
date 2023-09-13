const slugify = require('slugify')

exports.create = (req, res) => {
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
    // res.json({
    //     data: {title, content, author, slug},
    // })
}
