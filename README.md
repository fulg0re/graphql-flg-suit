# Dependencies...

* Install this next dependencies into your root project (not into `graphql-flg-suit`):

```
npm i --save apollo-server
npm i --save graphql
npm i --save mongoose
npm i --save merge-deep
npm i --save merge-graphql-schemas
npm i --save randomstring
```

# Startup...

## Create config

* Create in your project root folder `config` dir:

```
mkdir config
cd config
touch index.js
```

* Add this lines inside `config/index.js`:

```
const DB_NAME = 'dbName';
```

* Create in your project root folder `gql` dir and 2 files:

```
mkdir gql
cd gql
touch resolvers.js
touch typeDefs.js
```

* Add next lines in to this files:

```
// "resolvers.js" example
const UserResolvers = require('../src/user/gql/resolvers');

module.exports = [
  ...UserResolvers,
];
```

```
// "typeDefs.js" example
const UserSchema = require('../src/user/gql/schema');

module.exports = [
  ...UserSchema,
];
```
