const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const MuggerSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    link: Number,
    about: String,
    image: mongoose.Schema.Types.Buffer,
    time_of_live: String,
    place_of_live: String,
    size: String,
    visitors: Number,
    section: String,
})

const MuggerAuthor = mongoose.model("book",MuggerSchema)

module.exports = MuggerAuthor;