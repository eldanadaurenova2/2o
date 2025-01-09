const express = require('express');
const path = require('path');
const Product = require("./models/Product"); 
const mongoose = require('./config/mongo'); 
const productRoutes = require('./routes/product');
const cors = require('cors'); 

const app = express();
const PORT = 3000;

// Middleware для CORS
app.use(cors({
  origin: 'http://localhost:3000',  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); 

// Роутинг
app.use('/api/products', productRoutes);

// Статические файлы
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Сервер работает на http://localhost:${PORT}`);
});
