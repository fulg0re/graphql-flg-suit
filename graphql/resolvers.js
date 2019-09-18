const mergeDeep = require('merge-deep');

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const resolver1 = {
  Query: {
    books: () => books,
  },
};

const resolver2 = {
  Query: {
    book: () => books[1],
  },
};

const resolver3 = {
  Query: {
    flg: () => ({ hello: 'Hello flg !!###!' }),
  },
};

const resolvers = [
  resolver1,
  resolver2,
  resolver3,
];

module.exports = { resolvers: mergeDeep(resolvers) };
