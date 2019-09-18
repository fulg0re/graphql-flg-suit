const { mergeTypes } = require('merge-graphql-schemas');
const { gql } = require('apollo-server');

const typeDef1 = gql`
  type Book {
    title: String
    author: String
  }
`;

const typeDef2 = gql`
  type Query {
    books: [Book]
  }
`;

const typeDef3 = gql`
  type Query {
    book: Book
  }
`;

const typeDef4 = gql`
  type Flg {
    hello: String
  }
`;

const typeDef5 = gql`
  type Query {
    flg: Flg
  }
`;

const typeDefs = [
  typeDef1,
  typeDef2,
  typeDef3,
  typeDef4,
  typeDef5,
];

module.exports = { typeDefs: mergeTypes(typeDefs, { all: true }) };