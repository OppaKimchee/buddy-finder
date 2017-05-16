const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  category: String,
  name: {type: String, required: true},
  email: {type: String, required: true},
  phone: String,
  area: String,
  facebookId: String,
  status: {type: String, enum: ['Lost', 'Found']},
  pets: [{type: mongoose.Schema.Types.ObjectId, ref: 'Pet'}]
});


module.exports = mongoose.model('User', userSchema);
