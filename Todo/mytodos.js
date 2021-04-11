const express = require('express');
const app = express();
const todoRouter = express.Router();
const {v4: uuidv4} = require('uuid');

const PORT = 3000;

app.use(express.json())

let todos=[

    { Name:'clothes',description:'picking up clothes from cleaner',imageUrl: '',completed:'true',day:'Monday', _id: uuidv4()},
    { Name:'Walmart',description:'buy new pants',imageUrl: '',completed:'true',day:'Wednesday',_id: uuidv4()},
    { Name:'Phone',description:'call mom',imageUrl: '',completed:'true',day:'Friday', _id: uuidv4()},
    
];
todoRouter

app.get('/',(req, res) => {
    res.send(todos)
   })

   app.get('/:todoId',(req, res) => {
       console.log(req.params)
    const todoId = req.params.todoId;
    const singularTodo = todos.find (todo => todo._id === todoId);
     res.send(singularTodo);
   })
  
app.post('/',(req, res) => {
    const newTodo = req.body;
    newTodo._id = uuidv4();
    todos.push(newTodo);
    res.send('new todo added')

    console.log(todos)
    res.send(`successfully added ${newTodo.Name} to the database`)
})
app.delete('/:todoId', (req,res) =>{
const todoId = req.params.todoId;
const todoIndex = todos.findIndex(todo => todo._id ===todoId);
todos.splice(todoIndex, 1);

res.send('Todo has been deleted!')
})

app.put('/:todoId', (req, res) =>{
    const todoId = req.params.todoId;
    const todoIndex = todos.findIndex(todo => todo._id ===todoId);
    const updatedTodoResource = Object.assign(todos[todoIndex], req.body);

    res.send(`Resource successfully updated!`)
})

 app.listen(PORT,() => {
    console.log(`App started on port:${PORT}`)
    })
    module.exports = todoRouter;