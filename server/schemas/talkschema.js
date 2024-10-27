var mongoose=require("mongoose")
var talktome=new mongoose.Schema({
    name:{
        type:String,
    },
    phone:{
        type:String
    },
    query:{
        type:String
    }
})

module.exports=mongoose.model("talk",talktome);
console.log("talk schema imprted!");