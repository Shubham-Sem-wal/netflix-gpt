import React, { useState,useRef} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../utils/firebase"

const Login = () => {

    const [isSignIn , setIsSignIn] = useState(true);
    const [errorMsg , setErrorMsg] = useState(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = ()=>{
        setIsSignIn(!isSignIn);
    }

    const handleButtonClick = ()=>{
        //on clicking the buttton it will check for email and password validation
        //validate the form values
        // console.log(email.current.value);
        // console.log(password.current.value);
        const message = checkValidData(email.current.value,password.current.value);
        setErrorMsg(message);

        if(message) return;

        //sign in / sign up logic here
        if(!isSignIn){
            //for sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode +"-"+errorMessage);
                });
        }
        else{
            // for sign in logic
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode +"&"+errorMessage);
                });

        }
    }


  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
            alt="background-img" />
        </div>
        <form 
            onSubmit={(e) => e.preventDefault()} 
            className='absolute w-3/12 p-12 bg-black mx-auto my-36 right-0 left-0 text-white bg-opacity-80'>
            <h1 className='text-3xl ml-3 mb-4 font-bold'>{ isSignIn ? "Sign In":"Sign Up"}</h1>
            {
               !isSignIn && 
               (<input 
                type="text" 
                placeholder='Full Name' 
                className='p-4 m-2 w-full rounded-lg bg-slate-700 ' />)
            }
            <input 
                ref={email}
                type="text" 
                placeholder='Email Address' 
                className='p-4 m-2 w-full rounded-lg bg-slate-700 ' />
            <input 
                ref={password}
                type="password" 
                placeholder='Password' 
                className='p-4 m-2 w-full rounded-lg bg-slate-700'/>
            <p className='text-red-400 font-bold  p-4'>{errorMsg}</p>
            <button 
                onClick={handleButtonClick}
                className='p-3 m-2 bg-red-700 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}
            </button>

            <p 
            className='my-16 ml-5 cursor-pointer hover:underline' 
            onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign up now." : "Already user? Sign In now"}</p>
        </form>
    </div>
  )
}

export default Login
