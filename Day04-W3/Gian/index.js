const express = require('express');
const mongoose = require('mongoose');
const app = express();

const connectString = ('mongodb+srv://abc:abc@cluster0.wgfuk.mongodb.net/tododb?retryWrites=true&w=majority')
function connectToDB() {
    return new Promise((resolve, reject) => {
        try {
            mongoose.connect(connectString, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            let db = mongoose.connection;
            db.once('open', () => {
                console.log("success")
                resolve(db);
            });
            db.on('error', (error)=>{
                reject(error);
            });

        } catch (err) {
            console.log(err)
        }
    })
}
async function main(){
   await connectToDB();
    await app.listen(1212,()=>{
       console.log("server is running")
   })
   const TaskSchema = new mongoose.Schema({
    name: String,
    content: String,
    deadline: Number,
    status: String,

  });
   const Task = mongoose.model('Task', TaskSchema);
   let a = new Task ({
       name:"di cho",
       content: "mua do",
       deadline: Date.now() + 1000*60*60,
       status: "todo"
   });
  let result = await Task.find({
       name: " di cho"
   })
    console.log(result);
   app.get("/Task",async (req,res)=>{
        res.send(a);
});
   a.save();
}main();

