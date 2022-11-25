const mongoose = require('mongoose');

const URI ="mongodb+srv://siva:1234567890@cluster0.pix5plk.mongodb.net/recinfo?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }). then(() => console.log('DB connnection successful!'));

  // console.log('db connected..!');
};

module.exports = connectDB;