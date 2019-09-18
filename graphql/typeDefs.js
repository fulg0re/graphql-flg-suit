const { mergeTypes } = require('merge-graphql-schemas');

const typeDefs = require('../../gql/typeDefs');

// const typeDefs = [
//   ...UserSchema,
// ];

module.exports = { typeDefs: mergeTypes(typeDefs, { all: true }) };