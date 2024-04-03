import React, { useEffect } from 'react'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(
            addUser({
              uid:uid , 
              email:email , 
              displayName:displayName , 
              photoURL:photoURL
            })
            );
            navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });

      //unsubscribe when component unmount...
      return () => unsubscribe();

  },[]);

  return (
    <div className='absolute flex justify-between px-8 py-2 w-screen bg-gradient-to-b from-black z-30'>
      <img 
      className='w-44 ml-20'
      src={NETFLIX_LOGO} 
      alt="netflix-logo" />
      {user && (
      <div className='flex items-center'>
        <button 
          onClick={handleSignOut}
          className='py-2 px-4 m-2 bg-red-600 rounded text-white '>Sign Out
        </button>
        <img 
          className='w-12 h-12 '
          src="https://cdn-icons-png.flaticon.com/128/945/945236.png" alt="user_img" />
      </div>
      )}
    </div>
  )
}

export default Header
