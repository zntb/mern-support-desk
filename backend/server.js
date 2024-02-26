const express = require('express');
require('colors');
require('dotenv').config();
const morgan = require('morgan');
const { errorHandler } = require('./middleware/errorMiddleware.js');
const connectDB = require('./config/db.js');
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Support Desk API' });
});

// Routes
app.use('/api/users', require('./routes/userRoutes.js'));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listen on PORT ${PORT}`);
});
