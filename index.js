const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { Todos } = require("./src/data/dotos");
const { typeDefs } = require("./src/graphql/typeDefs");
const { resolvers } = require("./src/graphql/resolvers");
const { TodoClass } = require("./src/utils/TodoClass");

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