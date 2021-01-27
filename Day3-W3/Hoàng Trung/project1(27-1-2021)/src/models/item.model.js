const { throws } = require("assert");

class item{
    /**
     * 
     * @param {String} id 
     * @param {String} name 
     * @param {number} price 
     * @param {number} inStock 
     */
    constructor(id,name,price,inStock){
        this.id=id;
        this.name=name;
        this.price=price;
        this.inStock=inStock;
    }
}
module.exports=item;