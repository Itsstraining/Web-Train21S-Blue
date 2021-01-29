const express = require('express');
const app = express();
const config = require('./config');
const mongoose = require('mongoose');

function listenServer() {
    app.listen(config.PORT, config.HOST, () => {
        console.log("Server running on: " + config.PORT + ":" + config.HOST)
    })
}

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

async function runServer(){
    await runDatabase();
    await listenServer();
}

runServer();
console.log("ủa sao bài y hệt hôm qua vậy?");