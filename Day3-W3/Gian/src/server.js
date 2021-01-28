const express = require("express");
const database = require("./database");
const app = express();
const db = new.database();
const body = require('body-parsers')

app.use(body.json());
app.get("/Items", (req, res) => {
    const { id } = req.query;
    if (id != undefined) {
        res.send({
            item: db.getAllItems(id),
        });
        return;
    }
    res.send({
        items: db.getAllItems(),
    });
});
app.post("/items", (req, res) => {
    const { id, name, price, inStock, discount } = req.body;
    try {
        db.createItems(new ShopItem(id, name, price, inStock, discount));
        res.send({
            message: `Item [${id}] was create`
        });
    }
    catch (err) {
        res.status(400)
        
    }
}
);
module.exports = app;