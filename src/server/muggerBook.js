const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const MuggerSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    link: Number,
    section: String,
    year_created: String,
    author_ud: mongoose.Schema.Types.ObjectId,
})

const MuggerBook = mongoose.model("book",MuggerSchema)

module.exports = MuggerBook;