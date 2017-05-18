const express = require('express');
const router = express.Router();
const pets = require('../controllers/pets');

// start from /

// map
router.get('/', pets.index);

// about
router.get('/pets/about', pets.about);

// pet submission form
router.get('/pets/new', pets.new);

// pet submission create
router.post('/pets', isLoggedIn, pets.create);

// show all lost pets
router.get('/pets/lost', pets.lost);

// show all found pets
router.get('/pets/found', pets.found);

// show one pet
router.get('/pets/:id', pets.show);

// edit one pet form
router.get('/pets/:id/edit', pets.edit);

// edit one update
router.put('/pets/:id', isLoggedIn, pets.update);

// delete pet
router.delete('/pets/:id', isLoggedIn, pets.delete);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/');
}

module.exports = router;
