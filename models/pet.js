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

module.exports = mongoose.model('Pet', petSchema);

