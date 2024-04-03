import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div>
    <section className='video-title-section w-screen aspect-video absolute text-white bg-gradient-to-b from-black pt-[20%] px-24'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className=' py-6 text-lg w-1/3'>{overview}</p>
      <div>
        <button className='hover:bg-gray-800 bg-gray-500  text-white p-3 px-10 text-xl bg-opacity-40 rounded-lg'>Play Now</button>
        <button className='hover:bg-gray-800 bg-gray-500 text-white p-3 px-10 text-xl bg-opacity-40 rounded-lg ml-4'>More Info </button>
      </div>
    </section>
      
    </div>
  )
}

export default VideoTitle;
