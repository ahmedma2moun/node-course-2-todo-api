//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
        return console.log('Unable to connect to MongoDB Server');
    console.log('Connected to MongoDB Server');
    const db = client.db("TodoApp");

    // findOnAndUpdate
    db.collection('Todos').findOneAndUpdate(
        {
            _id: new ObjectID("5b1ba17bd59d5998e88e8dff")
        },
        {
            $set: {
                completed: false
            }
        },
        {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });


    client.close();
});