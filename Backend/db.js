const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect("mongodb+srv://amulyareddy23:SyCUqW_q9j79%40!b@cluster0.b9krsjs.mongodb.net/Todo")

const table = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('Todo',table)

module.exports = {
    todo : todo
}