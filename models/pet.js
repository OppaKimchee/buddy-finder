const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
  category: {type: String, required: true, enum: ['Lost', 'Found']},
  type: {type: String, required: true, enum: ['Cat', 'Dog']},
  sex: {type: String, enum: ['Female', 'Male', 'N/A']},
  size: {type: String, enum: ['Small', 'Medium', 'Large', 'N/A']},
  name: String,
  breed: String,
  color: String,
  street: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  description: String,
  contact: {type: String, required: true},
  picture: String,
  lat: Number,
  long: Number
},
{
  timestamps:true
});

module.exports = mongoose.model('Pet', petSchema);

