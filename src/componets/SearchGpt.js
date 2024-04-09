import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BACKGROUND_IMG } from '../utils/constants';

const SearchGpt = () => {
  return (
    <div>
      <div className='absolute -z-30'>
            <img src={BACKGROUND_IMG}
            alt="background-img" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default SearchGpt;
