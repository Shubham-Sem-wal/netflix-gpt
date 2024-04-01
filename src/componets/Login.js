import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignIn , setIsSignIn] = useState(true);

    const toggleSignInForm = ()=>{
        setIsSignIn(!isSignIn);
    }


  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
            alt="background-img" />
        </div>
        <form className='absolute w-3/12 p-12 bg-black mx-auto my-36 right-0 left-0 text-white bg-opacity-80'>
            <h1 className='text-3xl ml-3 mb-4 font-bold'>{ isSignIn ? "Sign In":"Sign Up"}</h1>
            {
               !isSignIn && 
               (<input 
                type="text" 
                placeholder='Full Name' 
                className='p-4 m-2 w-full rounded-lg bg-slate-700 ' />)
            }
            <input 
                type="text" 
                placeholder='Email Address' 
                className='p-4 m-2 w-full rounded-lg bg-slate-700 ' />
            <input 
                type="password" 
                placeholder='Password' 
                className='p-4 m-2 w-full rounded-lg bg-slate-700'/>
            <button className='p-3 m-2 bg-red-700 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>

            <p 
            className='my-16 ml-5 cursor-pointer hover:underline' 
            onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign up now." : "Already user? Sign In now"}</p>
        </form>
    </div>
  )
}

export default Login
