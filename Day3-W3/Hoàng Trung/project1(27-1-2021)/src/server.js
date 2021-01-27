const express = require('express');
const Database = require('./Database');
const item = require('./models/item.model');
const app = express();
const body= require('body-parser');
const db = new Database();
app.use(body.json())
// app.listen(8080,"/",(req,res)=>{
//     app.res("Server is running")
// })
app.post("/createitem", (req, res) => {
    const { id, name, price, inStock } = req.body;
    try{

    db.createItem(new item(id,name,price,inStock));
    res.send({
        message:'item added!!',
    })

    }catch(err){
        res.status(200);
    }
})
app.get("/getitems",(req,res)=>{
    const {id} = req.query;

})
module.exports = app;