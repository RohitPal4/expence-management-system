const express = require('express');
const cors = require('cors');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/connectDB');

// config dotenv file 
dotenv.config();


// database call
connectDb();

// rest object 
const app = express();

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// middlewares 
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// user routes 
app.use('/api/v1/users', require('./routes/userRoute'));

// transaction routes
app.use('/api/v1/transactions', require('./routes/transactionRoutes'));

// port
const PORT = 8080 || process.env.PORT;

// listen
app.listen(PORT, ()=>{
    console.log(`Server Running On ${PORT}`);
});