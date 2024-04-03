import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();//this custom hook is fetching the TMDB now_playing_movie data and putting it in our redux store...

  return (
    <div className=''>
      <Header/>  
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
        main container
          - video background
          - video title
        
        secondary container
          -movies list
             - in form of cards
      
      
      
       */}
    </div>
  )
}

export default Browse
