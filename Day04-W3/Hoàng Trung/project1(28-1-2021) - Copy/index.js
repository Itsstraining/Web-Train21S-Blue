const mongoose = require('mongoose');
const express = require('express');
const app = express();



function connectDB() {
    return new Promise((resolve, reject) => {
        const connectString = 'mongodb+srv://admin:4262129@cluster0.hgmjr.mongodb.net/toDo?retryWrites=true&w=majority';
        mongoose.connect(connectString, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = mongoose.connection;
        db.on('error', () => {
            console.error.bind(console, 'connection error:');
            reject("SERVER KHONG CHAY DUOCCCCCC")
        });
        db.once('open', () => {
            console.log("Database Connected");
            resolve(db);
        })
    })
}
async function main() {
    try {
        await connectDB();
        await app.listen(9090, "127.0.0.1", (req, res) => {
            console.log("SV chay duoc r");
        })
    } catch (err) {
        console.log("loi roi ne");
    }
    app.get("/task",(req,res)=>{
        res.send(task1);
    })
    app.post("/addTask",(req,res)=>{

    })
    let toDoList = new mongoose.Schema({
        name: String,
        note: String,
        dateTime: String,
        status: String,
    });
    let taskList = mongoose.model('task', toDoList);
    let task1= new taskList({
        name:"choigame",
        note:"choi lmht",
        dateTime:Date.now(),
        status:"con 99 tran nua",
    })
    task1.save();
}

main();

