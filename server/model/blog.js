const mongoose = require('mongoose')

const blogModel = mongoose.Schema({
    title : {type: String, require: true},
    content: {type: {}, require: true},
    author: {type: String, default: 'Admin'},
    slug: {type: String, lowercase: true, unique: true, require: true}
}, {timestamps: true})

module.exports = mongoose.model("Blog", blogModel)