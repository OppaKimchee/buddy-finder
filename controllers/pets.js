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
  res.render('index');
};

function newPet(req, res) {
  res.render('submit');
};

function create(req, res) {
};

function all(req, res) {
  res.render('all');
};

function show(req, res) {
  res.render('show');
};

function edit(req, res) {
  res.render('edit');
};

function update(req, res) {
};

function deletePet(req, res) {
};




module.exports = pets
