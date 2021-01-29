const mongoose = require('mongoose');

// const Task = require()
const db = mongoose.connection;

class Database {
    // constructor(connectionString) {
    //     this.connectionString = connectionString;
    // }


    /**
     * 
     * 
     * @returns {Promise<mongoose.Collection>}
     */
    async connectDB(x) {
        return new Promise((resolve, reject) => {

            mongoose.connect(x,
                { useNewUrlParser: true, useUnifiedTopology: true });

            db.on('error', () => {
                reject("Database connected unsuccessfully");
            })
            db.once('open', function () {
                console.log("Database connected!");
                resolve(db);

            });

        })
    }
}


module.exports = Database;