//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
        return console.log('Unable to connect to MongoDB Server');
    console.log('Connected to MongoDB Server');
    const db = client.db("TodoApp");

    // findAll
    db.collection('Todos').find().toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{console.log('Unable to fetch todos',err)});

    // find query
    db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{console.log('Unable to fetch todos',err)});

    // count
    db.collection('Todos').find().count().then((count) => {
        console.log('Todos count:', count);
    }, (err) => { console.log('Unable to fetch todos', err) });

    client.close();
});