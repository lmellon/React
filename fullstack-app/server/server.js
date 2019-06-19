const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const db = "mongodb://localhost:27017/myfullstackapp";

mongoose.connect(db, ({useNewUrlParser: true}))
    .then(console.log("connected to MongoDB"))
    .catch(error => console.log(error))

// model
const todoSchema = new mongoose.Schema({
    title: String,
    complete: {
        type: Boolean,
        default: false
    }
})

const Todo = mongoose.model('todo', todoSchema)

// get route
app.get('/todos', (req,res) => {
    Todo.find().then(todo => res.json(todo))
    .catch( err => console.log(err))
})

// create route
app.post('/todos',(req,res) => {
    const newTodo = new Todo({
        title: req.body.title
    })
    newTodo.save()
    .then(todo => res.json(todo))
    .catch( err => console.log(err))
})

// delete route
app.delete('/todos/:id', (req,res) => {
    Todo.findByIdAndDelete(req.params.id)
    .then( () => res.json({remove: true}))
    .catch( err => console.log(err))
})

app.listen(4000, () => {
    console.log("server is running at port 4000");
});
