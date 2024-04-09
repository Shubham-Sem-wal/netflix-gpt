import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-44 p-1  transition duration-700 ease-in-out delay-150 hover:-translate-y-6 hover:scale-125'>
        <img className='rounded-lg ' src={IMG_CDN_URL + posterPath} alt="movie_card" />
    </div>
  )
}

export default MovieCard
