const express = require('express');
const router = express.Router();
const createCoop = require('../controller/coop/create');
const getACoop = require('../controller/coop/get');
const getAllCoop = require('../controller/coop/getAll');
const updateCoop = require('../controller/coop/update');
const deleteCoop = require('../controller/coop/delete');


router.post('/', (req,res) => {return createCoop(req,res)});
router.get('/:id', (req, res) => { return getACoop(req, res)});
router.get('/',(req, res) => { return getAllCoop(req,res)});
router.put('/:id', (req, res) => { return updateCoop(req, res)});
router.delete('/:id', (req,res) => {return deleteCoop(req,res)});

module.exports = router;