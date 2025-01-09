const express = require('express');
const { fetchAds } = require('../controllers/adController');

const router = express.Router();

router.get('/', fetchAds); 

module.exports = router;
