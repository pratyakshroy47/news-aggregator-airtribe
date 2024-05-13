// newsRoutes.js
const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/news', authMiddleware.authenticate, newsController.getNews);
router.get('/preferences', authMiddleware.authenticate, newsController.getPreferences);
router.put('/preferences', authMiddleware.authenticate, newsController.updatePreferences);

module.exports = router;
