/*
This file serves to connect our app to a MongoDB database
*/

const mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.connect(process.env.DATABASE_URL);

mongoose.connection.once('open', function() {
  console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
});

module.exports = mongoose;
