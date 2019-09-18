const mongoose = require('mongoose');
const { DB_NAME } = require('../../../config');

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);

/** Connection to DataBase will be global */
global.DataBaseConnection = mongoose.connection;

/** Open connection */
const connect = (callback) => {
  try {
    DataBaseConnection.on('error', console.error.bind(console, 'connection error:'));
    DataBaseConnection.once('open', () => {
      console.log('Connected to DB successfully...');
      callback();
    });
  } catch (err) {
    console.error(err.stack);
  }
};

module.exports = { connect };