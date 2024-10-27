// priceCountsRouter.js
const express = require('express');
const router = express.Router();
const Purchase = require("../schemas/purchaseSchema"); 


router.get('/prices', async (req, res) => {
    try {
   
        const counts = await Purchase.aggregate([
            {
                $match: {
                    selectedPrice: { $in: [1000, 2500, 5000] } 
                }
            },
            {
                $unwind: '$selectedPrice' 
            },
            {
                $match: {
                    selectedPrice: { $in: [1000, 2500, 5000] } 
                }
            },
            {
                $group: {
                    _id: '$selectedPrice', 
                    count: { $sum: 1 } 
                }
            }
        ]);

        const result = {
            1000: 0,
            2500: 0,
            5000: 0
        };

       
        counts.forEach(priceCount => {
            result[priceCount._id] = priceCount.count;
        });

    
        res.json(result);
    } catch (error) {
        console.error("Error fetching price counts:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
