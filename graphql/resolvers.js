const mergeDeep = require('merge-deep');

const resolvers = require('../../gql/resolvers');

// const resolvers = [
//   ...UserResolvers,
// ];

module.exports = { resolvers: mergeDeep(resolvers) };
