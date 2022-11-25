const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db/db');

connectDB();
const app = express();

app.use(express.json());

const port = 5000;

// mongoose.connect('mongodb://localhost/players',{
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// });

mongoose.connection.once('open', () => {
  console.log('Data base connection has been made');
});

app.use('/api/players', require('./routes/player'));

app.listen(port, () => {
  console.log('application has been started in port ', port);
});