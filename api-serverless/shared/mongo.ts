import { MongoClient, MongoClientOptions, MongosOptions } from 'mongodb';

const config = {
    url: 'mongodb://localhost:27017/voting-intention',
    dbname: 'voting-intention'
}

async function createConnection() {
    const connection = await MongoClient.connect(config.url, {useNewUrlParser: true});
    const db = connection.db(config.dbname);
    return {
        connection,
        db
    };
}

export default createConnection;