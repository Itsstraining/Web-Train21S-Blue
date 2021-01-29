const app = require('./server');
const config = require('./config');
const Database = require('./database')
const db = new Database();

const connectionString = "mongodb+srv://admin:4262129@cluster0.hgmjr.mongodb.net/toDo?retryWrites=true&w=majority"


async function main() {
    await db.connectDB(connectionString)
    app.listen(config.PORT, config.HOST, () => {
        console.log("Server is running at:" + config.HOST + ":" + config.PORT);
    })
}

main();