const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { ObjectID } = require('mongodb')

var id = "5b9d2316b948b5901fa4aacf";
if(!ObjectID.isValid(id))
{
    console.log('ID not valid');
    return;
}
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
    console.log('Todo by id', todo);
}).catch((e) => console.log(e));