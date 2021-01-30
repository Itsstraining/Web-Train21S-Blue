const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    name: String,
    title:String,
    createDate: Number,
    deadline: Number,

  });
module.exports = taskSchema;