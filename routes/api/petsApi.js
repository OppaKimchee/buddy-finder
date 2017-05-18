const express = require('express');
const router = express.Router();
const petsApi = require('../../controllers/api/petsApi');

// start from /

// map
router.get('/pets', petsApi.index);

// show all lost pets
router.get('/pets/lost', petsApi.lost);

// show all found pets
router.get('/pets/found', petsApi.found);

// show one pet
router.get('/pets/:id', petsApi.show);

module.exports = router;
