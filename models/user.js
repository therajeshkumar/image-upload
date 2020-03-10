const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: false 
    },
  
    email: {
      type: String,
      required: true
    },
  
    password: {
      type: String,
      required: false
    }

  });
  
  const User = mongoose.model('User', userSchema);

  exports.User = User; 