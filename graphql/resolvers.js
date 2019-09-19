const mergeDeep = require('merge-deep');

const resolversArr = require('../../gql/resolvers');

module.exports = { resolvers: mergeDeep(...resolversArr) };
