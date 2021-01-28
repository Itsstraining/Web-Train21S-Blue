const ShopItem = require('./models/shop-item.model');
class database{
    constructor(){
        this.items=[];
        this.carts=[];
    }
    /**
     * @param {ShopItem} item
     */
    createItems(item){
        this.items.push(item);
        /**
         * @returns {Array<ShopItem>} Shop items
         */
    } 
    getAllItems(){
        return this.items;
    }
    /**
     * @param {string} id
     * @returns {ShopItem} Found Items
     */
    getItembyId(id){
        for(let i=0; i<this.items.length;i++){
            if(this.items[i].id=id){
                return this.items[i];
            }
        }
    }
}
module.exports = database;