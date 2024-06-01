const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRoute');
const testingRouter = require('./routes/testingRoute');
const app = express();

// 1) MIDDLEWARES
app.use(cors());
app.use(express.json());

// 2) ROUTE
app.use('/api/auth', authRouter);
app.use('/api/testing', testingRouter);

// 3) MOONGO DB CONNECTION
mongoose
  .connect('mongodb://127.0.0.1:27017/authentication')
  .then(() => console.log('Connected to MongoDB!'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));

// 4) GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

// 5) SERVER
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`App runing on ${PORT}`);
});
