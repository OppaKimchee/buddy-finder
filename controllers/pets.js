const User = require('../models/user');
const Pet = require('../models/pet');


const pets = {
  index,
  new: newPet,
  create,
  all,
  show,
  edit,
  update,
  delete: deletePet
  };

function index(req, res) {
  res.render('index', {user:req.user});
}

function newPet(req, res) {
  res.render('submit', {user:req.user});
}

function create(req, res) {
  console.log("CREATING THIS PETIZZLE", req.body);
  var pet = new Pet(req.body);
  pet.save(function(err) {
    if (err) {
      console.log('THERE WAS AN ERROR CREATING PET', err);
      return res.redirect('/pets/new');
    }
    res.redirect('/');
  })
}

function all(req, res) {
  // const route = 'pets/all'
  res.render('all', {user:req.user});
}

function show(req, res) {
  res.render('show', {user:req.user});
}

function edit(req, res) {
  res.render('edit', {user:req.user});
}

function update(req, res) {
}

function deletePet(req, res) {
}




module.exports = pets
