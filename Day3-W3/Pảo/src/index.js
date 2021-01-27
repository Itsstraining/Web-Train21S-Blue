const app = require('./server');
const config = require('./config');

//Check xem server có chạy ko?
app.listen(config.PORT, config.HOST,() => 
{
  console.log(`Server running on ${config.HOST} : ${config.PORT}`)
});
//Check xem server có chạy ko?