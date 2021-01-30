const express = require('express');
const config = require('./config');
const server = require("./server");
const mongoose = require('mongoose');
const app = express();
const Database = require('./database')

async function main(){
const db = new Database(mongoose.connection)
    await app.listen(config.PORT,config.HOST,()=>{
        console.log('Database was created at')
    })
}
main();