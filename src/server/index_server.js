const express = require("express")
const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const app = express();

// установка схемы
const userScheme = new Schema({
    name: String,
    age: Number
});

mongoose.connect("mongodb+srv://Gordey:gordey04@cloud.m0am5.mongodb.net/mongo?retryWrites=true&w=majority",{ useNewUrlParser: true })

const User = mongoose.model("user", userScheme);
const user = new User({
    name: "Bill",
    age: 41
});

user.save(function(err){
    mongoose.disconnect();  // отключение от базы данных

    if(err) return console.log(err);
    console.log("Сохранен объект", user);
});