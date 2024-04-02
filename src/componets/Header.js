import React from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
    <div className='absolute flex justify-between px-8 py-2 w-screen bg-gradient-to-b from-black z-30'>
      <img 
      className='w-44 ml-20'
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
      alt="netflix-logo" />
      {user && (
      <div>
        <button 
        onClick={handleSignOut}
        className='py-3 px-6 m-2 bg-red-600 rounded text-white font-bold'>Sign Out</button>
      </div>
      )}
    </div>
  )
}

export default Header
