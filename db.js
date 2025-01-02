const mongoose=require("mongoose");
const uri=""
function connectDb(){
    mongoose
    .connect(uri)
    .then(()=>console.log("connected to the MongoDb database"))
    .catch((err)=>console.log("connection error"));
}
module.export=connectDb;
