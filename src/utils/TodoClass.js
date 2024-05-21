class TodoClass {
    constructor(todos){
        this._todos = todos;
    }
    getTodos(){
        return this._todos;
    }
    setTodos(todos){
        this._todos = todos;
    }
}

module.exports = {
    TodoClass
}