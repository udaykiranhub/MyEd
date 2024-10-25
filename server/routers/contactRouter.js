// routes/contactRoutes.js
const express = require('express');
const Contact = require('../schemas/contactSchema'); // Adjust the path as necessary

const router = express.Router();

// Contact form submission route
router.post('/submit', async (req, res) => {
  const { firstName, lastName, schoolName, city, email, phoneNumber, message } = req.body;

  try {
    // Create a new contact entry
    const newContact = new Contact({
      firstName,
      lastName,
      schoolName,
      city,
      email,
      phoneNumber,
      message,
    });

    const existingContact = await Contact.findOne({
        $or: [{ email }, { phoneNumber }],
      });
  
      if (existingContact) {
        return res.status(400).json({ message: 'Contact with this email or phone number already exists.' });
      }

    // Save contact to the database
    await newContact.save()
    .then(function(data){
        console.log('Contact data saved sucessfully!');
    })
    .catch(function(err){
        console.log('Erro in  the contact details saving!@ form!');
    })
    return res.status(201).json({ message: 'Contact information submitted successfully.' });

  } 
  
  catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error.' });
  }
});

module.exports = router;
console.log("Contact Router improted!");