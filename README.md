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

# Usage...

```
const { startSuitServer } = require('./graphql-flg-suit');

// typeDefs = [typeDef]
// resolvers = [resolver]
startSuitServer(typeDefs, resolvers);


```
