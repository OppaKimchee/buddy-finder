const User = require('../../models/user');
const Pet = require('../../models/pet');

const petsApi = {
  index,
  found,
  lost,
  show
};

function index(req, res) {
  Pet.find({},function(err, pets){
    res.json(pets);
  })
}

function lost(req, res) {
  Pet.find({category: 'Lost'}, function(err, pets) {
    if (err) return res.redirect('/');
    res.json(pets);
  });
}


function found(req, res) {
  Pet.find({category: 'Found'}, function(err, pets) {
    if (err) return res.redirect('/');
    res.json(pets);
  });
}

function show(req, res) {
  Pet.findById(req.params.id, function(err, pet) {
    if (err) return res.redirect('/');
    res.json(pet);
  });
}

module.exports = petsApi
