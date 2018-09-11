//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
        return console.log('Unable to connect to MongoDB Server');
    console.log('Connected to MongoDB Server');
   // const db = client.db("TodoApp");
    // db.collection('Todos').insertOne({
    //     "text": "Test",
    //     "completed": false

    // }, (err, result) => {
    //     if (err)
    //         return console.log('Unable to insert todo', err);
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     "name": "som3a",
    //     "age": 12,
    //     "location": "Giza"
    // }, (err, result) => {
    //     if (err)
    //         return console.log("Unable to insert user", err);
    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // });
    client.close();
    //    db.close();
});