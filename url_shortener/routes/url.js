const express = require('express');
const { handleGenerateNewShortUrl, handleGetUrl ,handleGetAnalytics} = require('../controllers/url');
const router = express.Router();

// POST /url → create short URL
router.post('/', handleGenerateNewShortUrl);

// GET /url/:shortId → redirect
router.get('/:shortId', handleGetUrl);

router.get('/analytics/:shortId',handleGetAnalytics)

module.exports = router;
