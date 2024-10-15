const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/database');
const app = express();

// connection with database
connectDB();

// middleware 
app.use(express.json());
app.use(cookieParser());

// Routes
const userRoute = require('./routes/userRoute');

app.use('/api/user', userRoute);

const PORT = process.env.PORT || 5000;

app.listen( PORT , () => console.log(`server runing in port http://localhost:${PORT}`))