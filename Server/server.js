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

app.post("/signup",async(req,res)=>{
  const form = req.body.form
  const data = {
    FirstName:form.FirstName,
    Email:form.Email,
    password:form.password
  }

  try{
    const check = await userCollection.findOne({Email:form.Email})

    if(check){
      res.json("exist")
    }
    else{
      res.json("notexist")
      await userCollection.insertMany([data])
    }
  }
  catch(e){
      res.json("fail")
  }
})
app.listen(PORT,()=>{
  console.log("port connected")
})
