const express = require('express');
const path = require('path');
const router = express.Router();

// Статическая папка
router.use(express.static(path.join(__dirname, '..', 'public')));

// Маршруты для страниц
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

router.get('/bag', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'bag.html'));
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

router.get('/catalog', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'catalog.html'));
});

module.exports = router;
