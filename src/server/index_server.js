const express = require("express")
const mongoose = require("mongoose")
const MuggerBook = require("./muggerBook");
const Schema = mongoose.Schema;

mongoose.connect("mongodb+srv://Gordey:gordey04@cloud.m0am5.mongodb.net/mongo?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true })

// const User = mongoose.model("user", MuggerBook);
//
// const getBooks = () => {
//
//
//
// }