import React, {useState} from 'react';
import './login.css';
import LoginImage from './Login_image.png';
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'

function Signup() {

  const [captchaVal,setCaptchaVal] = useState(null)

  const navigate = useNavigate()

  const [form,setform] = useState({
    FirstName:"",
    LastName:"",
    MobileNumber:"",
    Email:"",
    password:"",
    cpassword:""

  })

  const submit = async(e) =>{
    e.preventDefault()
    try{
        if(form.password.length < 6){
            toast.error("Password length insufficient!")
        }
        else if(form.password != form.cpassword){
            toast.error("Passwords donot match")
        }
        else if(!captchaVal){
            toast.error("Fill the captcha")
        }
        else{
          await axios.post("http://localhost:8000/signup",{
            form
          })
          .then(res=>{
            if(res.data=="exist"){
              toast.error("Email already registered")
            }
            else if(res.data = "notexist"){
              toast.success("Successfully registered")
            }
          })
        }
    }
    catch(e){
      console.log(e)
    }
  }
   
  return (
    
    <>
     <div class="min-h-screen py-40 bg-gradient-to-r from-blue-500 to-white ...">
         <div class="container mx-auto bg-gradient-to-r from-blue-500 to-white ...">
           <div class="flex w-8/12 bg-white rounded-lg mx-auto shadow-lg overflow-hidden">
           <div class="w-1/2" style={{backgroundImage:  `url(${LoginImage})`,backgroundSize: 'cover'}}>
    
    <h1 class="text-3xl mt-5 text-white">Welcome to the property dashboard</h1>
                </div>
                <div class="w-1/2 px-12 py-16">
    <h2 class="text-3xl mb-4">Create Your Account</h2>
    <form action="POST" method = '/login' onSubmit={submit}>
      <div class = "grid grid-cols-2 gap-5 mt-5">
        <input required value = {form.FirstName} onChange={(e)=>{setform({...form,FirstName:e.target.value})}} type="text" placeholder='FirstName' class = "border border-gray-400 py-1 px-2"/> 
        <input required value = {form.LastName} onChange={(e)=>{setform({...form,LastName:e.target.value})}} type="text" placeholder='LastName' class = "border border-gray-400 py-1 px-2"/> 
      </div>
      <div class="mt-10">
        <input required value = {form.MobileNumber} onChange={(e)=>{setform({...form,MobileNumber:e.target.value})}} type="text" placeholder='Mobile Number' class = "border border-gray-400 py-1 px-2 w-full"/> 
      </div>
      <div class="mt-10">
        <input required value = {form.Email} onChange={(e)=>{setform({...form,Email:e.target.value})}} type="email" placeholder='Email' class = "border border-gray-400 py-1 px-2 w-full"/> 
      </div>
      <div class="mt-10">
        <input required value = {form.password} onChange={(e)=>{setform({...form,password:e.target.value})}} type="password" placeholder='Password' class = "border border-gray-400 py-1 px-2 w-full"/> 
      </div>
      <div class="mt-10">
        <input required value = {form.cpassword} onChange={(e)=>{setform({...form,cpassword:e.target.value})}} type="password" placeholder='Confirm Password' class = "border border-gray-400 py-1 px-2 w-full"/> 
      </div>
      <div class="mt-10">
        <ReCAPTCHA 
            sitekey='6Lfx6DEoAAAAAHOAGJQ254Nl709q5m57HMxINxsf'
            onChange={(value)=>{setCaptchaVal(value)}}
        />
      </div>
      <div class ="mt-10">
        <span class='px-3'>Already have an account? <a  class="text-blue-500 font-semibold"><Link to = {'/login'}> Login </Link></a>  </span>
      </div>

      <div class="mt-10">
        <input class = "w-full cursor-pointer bg-blue-500 py-3 text-center text-white" type='submit' value='submit'/>  
      </div>
    </form>
                </div>
           </div>
         </div>
     </div>
    </>
  );
}

export default Signup;
