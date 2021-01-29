const express = require('express');
const app = express();

const mongoose = require('mongoose');

//chạy đc chưa?
function runDatabase() {
    let result = new Promise((resolve, reject) => {
        mongoose.connect('mongodb+srv://admin:admin@cluster0.dvwsb.mongodb.net/adminBao?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
        const db = mongoose.connection;
        db.on('error', () => {
            console.error('connection error:');
            reject("error");
        });
        db.once('open', () => {
            console.log("Chạy được nè");
            resolve(db)
        });
    })
    return result;
}

async function runServer() {
    try {
        await runDatabase();
        await app.listen(1919, "0.0.0.0", () => {console.log("Server connected")})
    } catch (err) {
        console.error(err);
    }
}

runServer();
//chạy đc chưa?



app.get('/task', (req, res) => 
{
    res.send(task1)
})

const task = new mongoose.Schema
({
    name: String,
    note: String,
    time: String,
});

const taskList = mongoose.model('taskN',task)

const task1 = new taskList
({
    name: "ViecLam01",
    note: "LamViec",
    time: Date.now(),
})
//wtf are these?

task1.save();