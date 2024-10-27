const mongoose=require("mongoose");
var purchase=new mongoose.Schema({
    phoneNumber:{
        type:String,
      
    }
    ,
    name:{
        type:String
    },
    purchases:{
        type:Number
    },
    selectedPrice: {
        type: [Number],
        default: [],
      },
})

module.exports=mongoose.model("purchases",purchase);
console.log("purchase schema imported!");