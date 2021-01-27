const app=require('./server.js')
const config=require('./config.js')


app.listen(config.PORT,config.HOST,()=>{
    console.log("SV IS RIUNNGNGNGIGNdklgklsghklsdghlsgkl!!!" +config.PORT+config.HOST);
})
app.get("/",(req,res)=>{
    res.send("Xin chào Benett");
})
