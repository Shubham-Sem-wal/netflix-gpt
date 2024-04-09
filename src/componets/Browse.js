import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import SearchGpt from './SearchGpt';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();//this custom hook is fetching the TMDB now_playing_movie data and putting it in our redux store...
  usePopularMovies();//this custom hook is fetching the TMDB popular movies data and putting it in our redux store...
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className=''>
      <Header/> 
      { 
        showGptSearch ? <SearchGpt/> :
      <>
        <MainContainer/>
        <SecondaryContainer/>
      </>
      }
      
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
