const User = require('../models/user');
const Pet = require('../models/pet');


const pets = {
  index,
  new: submit,
  create,
  found,
  lost,
  show,
  edit,
  update,
  delete: deletePet
  };

function index(req, res) {
  res.render('index', {user:req.user, active:false});
}

function submit(req, res) {
  const active = 'submit'
  res.render('submit', {user:req.user, active});
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

function lost(req, res) {
  const active = 'lost';
  res.render('lost', {user:req.user, active});
}

function found(req, res) {
  const active = 'found';
  res.render('found', {user:req.user, active});
}

function show(req, res) {
  res.render('show', {user:req.user, active:false});
}

function edit(req, res) {
  res.render('edit', {user:req.user, active:false});
}

function update(req, res) {
}

function deletePet(req, res) {
}




module.exports = pets
