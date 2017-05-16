const User = require('../models/user');

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
}

function all(req, res) {
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
