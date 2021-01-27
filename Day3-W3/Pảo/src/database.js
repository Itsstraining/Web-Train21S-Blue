const shopItem = require('../models/shop-item.model');

class Database 
{
    constructor() 
    {
        this.items = [];
        this.carts = [];
    }

    /**
     * 
     * @param {shopItem} item
     */

    createItem(item) 
    {
        this.items.push(this.item)
    }
    getAllItems() 
    {
        return this.items;
    }

    /**
     * 
     * @param {string} id
     */

    getItemById(id) 
    {
        for (let i = 0; i < this.item.legth; i++) 
        {
            if (this.items[i].id == id) 
            {
                return this.items[i];
            }
        }
    }
}