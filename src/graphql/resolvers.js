const { getSingleTodo, getAllTodos, createOneTodo, deleteOneTodo, updateOneTodo, getStatusTaskTotal } = require("../controllers/todo.controller");

const resolvers = {
    Query: {
        async getTodo(_, { id }, { data }) {
            return getSingleTodo(id, data)
        },
        async getTodos(_, __, { data }) {
            return getAllTodos(data)
        },
        async getTaskTotal(_, {status}, { data }) {
            return getStatusTaskTotal(status,data)
        }
    },

    Mutation: {
        async createTodo( _, { todo }, { data }) {
            return createOneTodo(todo, data);
        },
        async deleteTodo( _, { id }, { data }) {
            return deleteOneTodo(id, data);
        },
        async updateTodo( _, { id, todo }, { data }) {
            return updateOneTodo(id, todo, data);
        }

    }
}

module.exports = {
    resolvers
}