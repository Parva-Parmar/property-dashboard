const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ecommerce_tut")
.then(()=>{
  console.log("mongo connected")
})
.catch(()=>{
  console.log("failed")
})

const userSchema = new mongoose.Schema({
  FirstName:{
    type:String,
    required:true
  },
  Email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})

const userCollection = mongoose.model("userCollection",userSchema);

const collection = {
  userCollection
}

module.exports=collection