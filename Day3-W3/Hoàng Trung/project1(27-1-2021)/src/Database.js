const item=require('./models/item.model');
class Database{
    constructor(){
        this.items=[];
    }
    /**
     * 
     * @param {item} item 
     */
    createItem(item){
        this.items.push(item);
    }
    getAllItem(){
        return this.items;

    }
    /**
     * 
     * @param {string} id 
     */
    getItemById(id){
        if(id==undefined){
            items:this.getAllItem();
        }
        else{
            for(i=0;i<this.items.length;i++){
                items:this.items[i].id;
            }
        }

    }
}
module.exports= Database;