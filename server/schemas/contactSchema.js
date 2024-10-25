const mongoose = require('mongoose');

// Create the Contact schema
const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
    match: /.+\@.+\..+/, 
  },
  phone: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
});


const Contact = mongoose.model('ContactDetails', contactSchema);

module.exports = Contact;


// "firstName": "Jane",
//   "lastName": "Doe",
//   "schoolName": "Springfield High",
//   "city": "Springfield",
//   "email": "john.doe@example.com",  // Same email as existing contact
//   "phoneNumber": "1234567890",
//   "message": "Hello, I would like to inquire about..."