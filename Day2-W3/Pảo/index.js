// bắt buộc phải có
const express = require('express')
const app = express()
const port = 1919
// bắt buộc phải có

function tinhTong(a,b)
{
  let tong = parseInt(a) + parseInt(b);
  return tong;
}

app.get('/tinhTong', (req, res) => 
{
  let {a,b} = req.query;
  res.send
  (
    '<div style="text-align: center">'+'<h1>Pố m có</h1>' + '<h1>'+tinhTong(a,b)+'</h1>' + '<h1> Bennets lận nè</h1>'+'</div>'
  )
})

//Check xem server có chạy ko?
app.listen(port, () => {
  console.log("Server running?")
})
//Check xem server có chạy ko?