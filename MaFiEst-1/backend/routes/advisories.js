const express = require('express');
const router = express.Router();
const advisoriesController = require('../controllers/advisories');

// Endpoint to create a new advisory
router.post('/', advisoriesController.createAdvisory);

// Endpoint to get all advisories
router.get('/', advisoriesController.getAllAdvisories);

// Endpoint to get a specific advisory by ID
router.get('/:id', advisoriesController.getAdvisoryById);

// Endpoint to update an advisory by ID
router.put('/:id', advisoriesController.updateAdvisory);

// Endpoint to delete an advisory by ID
router.delete('/:id', advisoriesController.deleteAdvisory);

module.exports = router;