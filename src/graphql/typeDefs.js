const typeDefs = `#graphql
    type Todo {
        id: ID
        title: String
        due_date: String
        completed: String
        status: String
        priority: String
    }

    input TodoInput{
        title: String
        due_date: String
        priority: String
    }

    type Query {
        getTodo(id: ID): Todo
        getTodos: [Todo]
        getTaskTotal(status: String): Int
    }

    type Mutation{
        createTodo(todo: TodoInput) : Todo
        deleteTodo(id: ID) : Boolean
        updateTodo(id: ID, todo: TodoInput): Todo
    }
`

module.exports = {
    typeDefs
}