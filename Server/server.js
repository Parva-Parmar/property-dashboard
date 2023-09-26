const cors = require("cors")
const bycrypt = require("bcryptjs")
const express = require("express")
const {userCollection} = require('./mongo')
const PORT = process.env.PORT || 8000;
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.get("/",cors(),(req,res) =>{

})

app.listen(PORT,()=>{
  console.log("port connected")
})

