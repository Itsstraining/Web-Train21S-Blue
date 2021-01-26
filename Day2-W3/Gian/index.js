const express = require(`express`);
const app = express();
app.get('/sum',(req,res)=>{
   const{a,b}= req.query;
   let result = parseInt(a)+parseInt(b)
   res.send({
       result:result,
   });
})
app.listen(1212,()=>{
    console.log(`Hello Gian`)

});

