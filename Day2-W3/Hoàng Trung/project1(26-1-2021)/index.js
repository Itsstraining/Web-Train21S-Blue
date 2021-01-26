const express = require("express");
const app = express();



function tinhtong(a,b) {
    // let a = 4;
    // let b = 5;
    let tong = parseInt(a) + parseInt(b);
    return tong;
//     console.log(tong);
}

function main() {

    app.listen(8080,"192.168.31.243",() => {
        console.log("Server dang chay :DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");


    })
    app.get("/", (req, res) => {
        res.send("Benett rat de kiem nhung co 1 thang nao do k kiem duoc hahahahahaah");
    })
    app.get("/tinhtong", (req, res) => {
        // res.send(tinhtong());
        let {a,b}= req.query;
        res.send("tong la:"+tinhtong(a,b));
   
    })
}
main();