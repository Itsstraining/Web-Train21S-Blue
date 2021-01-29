const mongoose=require('mongoose')


let toDoList = new mongoose.Schema({
    name: String,
    note: String,
    dateTime: String,
    status: String,
});
let taskList = mongoose.model('task', toDoList);

module.exports=taskSchema;