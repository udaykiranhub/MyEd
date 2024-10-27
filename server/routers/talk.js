const express = require('express');
const router = express.Router();

const contact = require("../schemas/contactSchema");
const talk = require("../schemas/talkschema");

router.post('/talk', async (req, res) => {
  const { name, phone, query } = req.body;
  console.log("Talk request data received:", req.body);



  try {
    // Check if the contact already exists
    const contactData = await contact.findOne({ phone });

    if (contactData) {
      // Check if a talk record already exists for the phone
      let talkData = await talk.findOne({ phone });

      if (talkData) {
        // Update the existing talk record with the new query
        await talk.findOneAndUpdate({ phone }, { query });
        return res.status(200).json({ message: 'Your query has been updated successfully.' });
      } else {
        // Create a new talk entry
        const newTalkData = new talk({ name, phone, query });
        await newTalkData.save()
          .then(() => {
            return res.status(200).json({ message: 'Your request has been sent to the team successfully.' });
          })
          .catch((err) => {
            console.error("Error saving talk data:", err);
            return res.status(500).json({ message: "Error saving the request data." });
          });
      }
    } else {
      return res.status(404).json({ message: 'You must submit contact details before talking to the team.' });
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return res.status(500).json({ message: 'There was an error processing your request.' });
  }
});

module.exports = router;

console.log("Talk router imported");
