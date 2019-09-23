const { ApolloServer, gql } = require('apollo-server');
const mergeDeep = require('merge-deep');
const { mergeTypes } = require('merge-graphql-schemas');

const connection = require('./mongo/connection');

const startSuitServer = (typeDefsArr, resolversArr) => {
  const resolvers = mergeDeep(...resolversArr);
  const typeDefs = mergeTypes(typeDefsArr, { all: true });

  connection.connect(() => {
    const server = new ApolloServer({ typeDefs, resolvers });

    server.listen({ port: 3060 }).then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  });
};

module.exports = { startSuitServer };
