const express = require('express');
const router = express.Router();
const pets = require('../../controllers/api/pets');

// start from /

// map
router.get('/', pets.index);

// pet submission form
router.get('/pets/new', pets.new);

// pet submission create
router.post('/api/pets', pets.create);

// show all lost pets
router.get('/api/pets/lost', pets.lost);

// show all found pets
router.get('/api/pets/found', pets.found);

// show one pet
router.get('/api/pets/:id', pets.show);

// edit one pet form
router.get('/api/pets/:id/edit', pets.edit);

// edit one update
router.put('/api/pets/:id', pets.update);

// delete pet
router.delete('/api/pets/:id', pets.delete);

module.exports = router;
