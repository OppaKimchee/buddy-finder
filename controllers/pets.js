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
  var pet = new Pet(req.body);
  pet.save(function(err) {
    if (err) {
      console.log('THERE WAS AN ERROR CREATING PET', err);
      return res.redirect('/pets/new');
    }
    req.user.pets.push(pet._id);
    req.user.save(function(err) {
      if(pet.category === 'Lost'){
        res.redirect('/pets/lost');
      }
      else{
        res.redirect('/pets/found');
      }
    })
  })
}

function lost(req, res) {
  const active = 'lost';
  Pet.find({}, function(err, pets) {
    if (err) return res.redirect('/');
    res.render('lost', {user:req.user, pets:pets, active});
  });
}


function found(req, res) {
  const active = 'found';
  Pet.find({}, function(err, pets) {
    if (err) return res.redirect('/');
    res.render('found', {user:req.user, pets:pets, active});
  });
}

function show(req, res) {
  Pet.findById(req.params.id, function(err, pet) {
    if (err) return res.redirect('/');
    res.render('show', {pet: pet, user: req.user, active: false});
  });
}

function edit(req, res) {
  Pet.findById(req.params.id, function(err, pet) {
    if (err) return res.redirect('/');
    res.render('edit', {user: req.user, pet: pet, active: false});
  });
}

function update(req, res) {
  Pet.findByIdAndUpdate(req.params.id, req.body, function(err, pet) {
    res.redirect('/pets/' + req.params.id)
  });
}

function deletePet(req, res) {
  Pet.findByIdAndRemove(req.params.id, function(err, pet) {
    if (err) return res.redirect('/pets/' + req.params.id);
    res.redirect('/');
  });
}




module.exports = pets
