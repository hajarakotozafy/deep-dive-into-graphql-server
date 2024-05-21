// const { Todos } = require("../data/dotos");
const { generateNewID } = require("../utils/functions");

const getSingleTodo = (id, data) => {
    const Todos = data.getTodos()
    return Todos.find(todo=>todo.id==id);
}

const getAllTodos = (data) => {
    return data.getTodos();
}

const createOneTodo = (todo, data) => {
    const Todos = data.getTodos();
    const todoToAdd = {
        "id": generateNewID(Todos),
        "title": todo.title,
        "due_date": todo.due_date,
        "completed_date": null,
        "status": "pending",
        "priority": todo.priority
      }
      
      Todos.push(todoToAdd);
      data.setTodos(Todos)
      return todoToAdd;
}

const deleteOneTodo = (id, data) => {
    let Todos = data.getTodos();
    Todos = Todos.filter(todo=>todo.id!=id)
    data.setTodos(Todos);
    return true
}

const updateOneTodo = (id, todo, data) => {
    const Todos = data.getTodos();
    const todoIndex = Todos.findIndex(todo => todo.id == id);
    if(todoIndex != -1){
    Todos[todoIndex].title = todo.title;
    Todos[todoIndex].due_date = todo.due_date;
    Todos[todoIndex].priority = todo.priority;
    }
    data.setTodos(Todos);
    return Todos[todoIndex];
}

const getStatusTaskTotal = (status, data) => {
    const Todos = data.getTodos();
    const taskTotal = Todos.filter(todo => todo.status == status).length;
    return taskTotal;
}

module.exports = {
    getSingleTodo,
    getAllTodos,
    createOneTodo,
    deleteOneTodo,
    updateOneTodo,
    getStatusTaskTotal
}