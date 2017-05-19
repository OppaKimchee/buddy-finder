const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  facebookId: String,
  pets: [{type: mongoose.Schema.Types.ObjectId, ref: 'Pet'}]
});

module.exports = mongoose.model('User', userSchema);
