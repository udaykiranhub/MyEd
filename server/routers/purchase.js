// purchaseRouter.js
const express = require('express');
const router = express.Router();
const purchase=require('../schemas/purchaseSchema');
const purchaseSchema = require('../schemas/purchaseSchema');
router.post('/purchase', async (req, res) => {
  const { phoneNumber, name, selectedPrice } = req.body;

  console.log("Received purchase request:", req.body);
  console.log(`Name: ${name}, Phone Number: ${phoneNumber}, Selected Price: ${selectedPrice}`);
  
  let data;
  try {

    let existingPurchase = await purchase.findOne({ phoneNumber: phoneNumber });
  
    if (existingPurchase) {

      data = await purchase.findOneAndUpdate(
        { phoneNumber: phoneNumber },
        {
          $inc: { purchases: 1 },
          $push: { selectedPrice: selectedPrice }
        },
        { new: true }
      );
    } else {
    
      data = new purchase({
        phoneNumber,
        name,
        purchases: 1,
        selectedPrice: [selectedPrice] 
      });
      await data.save();
    }
  
    console.log("Purchase data after update/creation:", data);
    res.status(200).json({ message: "Purchase processed successfully", data });
  } catch (error) {
    console.error("Error in processing the purchase:", error);
    res.status(500).json({ message: "Error processing the purchase. Please try again later." });
  }
});

module.exports = router;
console.log("Purchase Router importeed!");