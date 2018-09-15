const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { ObjectID } = require('mongodb')

// Todo.remove({}).then((result)=>{
//     console.log(result);
// })

Todo.findOneAndRemove({_id:'5b9d8937050128f0f56c7dfd'}).then((todo)=>console.log(todo));
Todo.findByIdAndRemove("5b9d8937050128f0f56c7dfd").then((todo)=>console.log(todo));