const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { Todos } = require("./data/dotos");
const { typeDefs } = require("./graphql/typeDefs");
const { resolvers } = require("./graphql/resolvers");
const { TodoClass } = require("./utils/TodoClass");

const data = new TodoClass(Todos);

const server = new ApolloServer({
    introspection: true,
    typeDefs,
    resolvers
})

startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => {
        return {
            data: data
        }
    }
});

console.log("server is listenning!")