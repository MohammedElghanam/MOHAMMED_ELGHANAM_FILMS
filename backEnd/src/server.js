const express = require('express');
const app = express();
const connectDB = require('./config/database');
require('dotenv').config();

// connection with database
connectDB();

// middleware 
app.use(express.json());

// Routes
const userRoute = require('./routes/userRoute');

app.use('/api/user', userRoute);

const PORT = process.env.PORT || 5000;

app.listen( PORT , () => console.log(`server runing in port http://localhost:${PORT}`))