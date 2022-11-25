const mongoose = require('mongoose');


const playerSchema = new mongoose.Schema({
  name: 
  {
    type: String, 
    required: true
  },
  email: 
  {
    type: String,
     required: true, 
     unique: true
  },
  password: 
  {
    type: String, 
    required: true 
  }
});
// {collection: 'player'});

const playermodel = mongoose.model('users', playerSchema);

module.exports = playermodel;