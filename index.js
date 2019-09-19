const { ApolloServer, gql } = require('apollo-server');
const { typeDefs, resolvers } = require('./graphql');
const connection = require('./mongo/connection');

connection.connect(() => {
  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen({ port: 3060 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
});

