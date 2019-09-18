1) Create in your root folder "config" dir
2) In "config" dir create file "index.js" and add next line
const DB_NAME = 'dbName';
3) Create in your root folder "gql" dir
4) In "config" dir create 2 files

// "resolvers.js" example
const UserResolvers = require('../src/user/gql/resolvers');

module.exports = [
  ...UserResolvers,
];

// "typeDefs.js" example
const UserSchema = require('../src/user/gql/schema');

module.exports = [
  ...UserSchema,
];
