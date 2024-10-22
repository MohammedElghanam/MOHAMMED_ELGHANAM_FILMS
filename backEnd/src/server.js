const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/database');
const { connectMinio } = require('./config/minio')
const app = express();

// connection with database
connectDB();
connectMinio();

// middleware 
app.use(express.json());
app.use(cookieParser());
// app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000'
}));


// Routes
const userRoute = require('./routes/userRoute');
const categoryRoute = require('./routes/categoryRoute');
const filmRoute = require('./routes/filmRoute');



app.use('/api/user', userRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/films', filmRoute);

const PORT = process.env.PORT || 5000;

app.listen( PORT , () => console.log(`server runing in port http://localhost:${PORT}`))