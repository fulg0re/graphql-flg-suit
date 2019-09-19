const { mergeTypes } = require('merge-graphql-schemas');

const typeDefs = require('../../gql/typeDefs');

module.exports = { typeDefs: mergeTypes(typeDefs, { all: true }) };