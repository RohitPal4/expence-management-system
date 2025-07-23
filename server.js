const express = require('express');
const cors = require('cors');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const connectDb = require('./config/connectDb');

// config dotenv
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
app.use(cors({
  origin: 'https://expence-management-system.onrender.com', // or '*'
  credentials: true,
}));


// routes
app.use('/api/v1/users', require('./routes/userRoute'));
app.use('/api/v1/transactions', require('./routes/transactionRoutes'));

// ======================
// Serve React frontend
// ======================
const __dirname1 = path.resolve(); // resolve current path
app.use(express.static(path.join(__dirname1, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname1, 'client', 'build', 'index.html'));
});

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
    console.log(`Server Running On ${PORT}`);
});


