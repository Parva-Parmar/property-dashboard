import React, {useState} from 'react';
import './login.css';
import LoginImage from './Login_image.png';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

function Login() {
   
  return (
    
    <>
     <div class="min-h-screen py-40 bg-gradient-to-r from-blue-500 to-white ...">
         <div class="container mx-auto bg-gradient-to-r from-blue-500 to-white ...">
           <div class="flex w-8/12 bg-white rounded-lg mx-auto shadow-lg overflow-hidden">
           <div class="w-1/2" style={{backgroundImage:  `url(${LoginImage})`,backgroundSize: 'cover'}}>
    
    <h1 class="text-3xl mt-5 text-white">Welcome to the property dashboard</h1>
                </div>
                <div class="w-1/2 px-12 py-16">
    <h2 class="text-3xl mb-4">Login</h2>
    <form action='#'>
      <div class="mt-10">
        <input type="text" placeholder='Email' class = "border border-gray-400 py-1 px-2 w-full"/> 
      </div>
      <div class="mt-10">
        <input type="password" placeholder='Password' class = "border border-gray-400 py-1 px-2 w-full"/> 
      </div>
      <div class="mt-10">
        <ReCAPTCHA sitekey='6Lfx6DEoAAAAAHOAGJQ254Nl709q5m57HMxINxsf'/>
      </div>
      <div class ="mt-10">
        <span class='px-3'> Don't have an account? <a  class="text-blue-500 font-semibold"><Link to = {'/signup'}> Signup </Link></a>  </span>
      </div>
      <div class="mt-10">
        <button  class = "w-full bg-blue-500 py-3 text-center text-white"> Submit </button>
      </div>
    </form>
                </div>
           </div>
         </div>
     </div>
    </>
  );
}

export default Login;
