const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:sindhu@cluster0.nhhfdey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect();

module.exports = client;
