const express=require("express")
const app=express()


const cors=require("cors")
const mongoose=require("mongoose")
require("dotenv").config();

//Registering libraries
app.use(express.json());
//files

const contact=require("./routers/contactRouter")
//cors

// app.use(cors({
//     origin:["url"],
//     method:["POST","GET"],
//     credentials:true
// }))

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
}));

//Connecting to DataBase

mongoose.connect(process.env.database)
.then(function(){
    console.log("DataBase Connected!");
})
.catch(function(err){
    console.log("Error in the Databse connection!");
})




//Router configuration

app.use("/",contact);



app.listen(5000,function(err){
    if(err){
        console.log("Error in the Server Listening!");
    }
    else{
        console.log("Server is Running!");
    }
})

