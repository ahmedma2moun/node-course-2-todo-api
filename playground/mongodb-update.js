//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
        return console.log('Unable to connect to MongoDB Server');
    console.log('Connected to MongoDB Server');
    const db = client.db("TodoApp");
    
    // findOnAndUpdate
db.collection('Todos').findOneAndUpdate()


    client.close();
});