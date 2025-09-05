const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progress');
const { tokenExtractor, userExtractor } = require('../utils/middleware');

// Get progress for a specific user
router.get('/:userId', tokenExtractor, userExtractor, progressController.getProgress);

// Update progress for a specific user
router.put('/:userId', tokenExtractor, userExtractor, progressController.updateProgress);

// Get all progress records (admin only)
router.get('/', tokenExtractor, userExtractor, progressController.getAllProgress);

module.exports = router;