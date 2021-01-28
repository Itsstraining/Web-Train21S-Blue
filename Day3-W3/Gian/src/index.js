const app =require('./server');
const config = require('./config')


app.listen(config(config.HOST,config.PORT,()=>{
    console.log(success);
}))