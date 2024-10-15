const express = require('express');
const app = express();
const connectDB = require('./config/database');
require('dotenv').config();

connectDB();

const PORT = process.env.PORT || 5000;

app.listen( PORT , () => console.log(`server runing in port http://localhost:${PORT}`))