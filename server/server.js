const express=require("express")
const app=express()

const mongoose=require("mongoose")
require("dotenv").config();

//cors

app.use(cors({
    origin:["url"],
    method:["POST","GET"],
    credentials:true
}))
//Connecting to DataBase

mongoose.connect(process.env.database)
.then(function(){
    console.log("DataBase Connected!");
})
.catch(function(err){
    console.log("Error in the Databse connection!");
})


app.listen(5000,function(err){
    if(err){
        console.log("Error in the Server Listening!");
    }
    else{
        console.log("Server is Running!");
    }
})

