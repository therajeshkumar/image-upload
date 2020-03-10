const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
  name: {
    type: String, 
   required: false },
  photo: {
    type: String, 
   required: true }
})



 const Customer = mongoose.model('Customer', customerSchema);



exports.Customer = Customer; 
