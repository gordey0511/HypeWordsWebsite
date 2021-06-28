const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const MuggerSchema = new Schema({
    name: String,
    age: Number,
    status: String,
})

const MuggerBook = mongoose.model("mugger",MuggerSchema)

module.exports = MuggerBook;