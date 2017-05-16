const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
  category: {type: String, required: true, enum: ['Lost', 'Found']},
  name: {type: String, required: true},
  type: {type: String, required: true, enum: ['Cat', 'Dog']},
  breed: {type: String, required: true},
  sex: {type: String, required: true, enum: ['Female', 'Male']},
  color: {type: String, required: true},
  size: {type: String, required: true, enum: ['Small', 'Medium', 'Large']},
  age: Number,
  location: {type: String, required: true},
  picture: {type: String, required: true},
  description: {type: String, required: true}
},
{
  timestamp:true
});

const userSchema = new Schema({
  category: String,
  name: {type: String, required: true},
  email: {type: String, required: true},
  phone: String,
  area: String,
  facebookId: String
  // status: {type: String, required: true, enum: ['Lost', 'Found']}
  // pets: [petSchema]
});


module.exports = mongoose.model('User', userSchema);
