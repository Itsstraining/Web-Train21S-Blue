const { response } = require("express");
const express =require("express");
const mongoose = require('mongoose');
const db = mongoose.connection;
class Database{
    constructor(connectionString){
        this.connectionString = connectionString;
    };
connectionString =('mongodb+srv://abc:abc@cluster0.wgfuk.mongodb.net/tododb?retryWrites=true&w=majority');
    async connect(){
        return new Promise((resolve,reject)=>{
            try{
                mongoose.connect(this.connectionString, 
                    {useNewUrlParser: true, 
                    useUnifiedTopology: true});
                    let db = mongoose.connection;
                    db.once('open', () => {
                        console.log("Create database success")
                        resolve(db);
                    });
                    db.on('error', (error)=>{
                        reject(error);
                    });
            }catch(error){
                console.log("Failed")
                

            }
        })
        
    }
}



module.exports = Database;
