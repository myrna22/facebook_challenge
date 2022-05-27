const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema= new Schema( {
    name:  {
        type: String,
        required: true,
        minlength: 15
    },
    message:  {
        type: String,
        required: true,
        minlength: 40
    }
}, {timestamps: true})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
