import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title , movies}) => {
    if(!movies) return;
    console.log(movies);
    
  return (
    <div className='text-gray-200 '>
        <h1 className='pl-3 pt-4 text-xl font-sans font-medium'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
                {movies.map( (movie) =>  (<MovieCard key={movie.id} posterPath={movie.poster_path}/>))}
            </div>
        </div>
    </div>
  )
}

export default MovieList;


// <div>
    //     <div>
    //         <h1>{title}</h1>
    //         <div>
    //             <MovieCard posterPath={movies[0].poster_path}/>
    //         </div>
    //     </div>
    // </div>
