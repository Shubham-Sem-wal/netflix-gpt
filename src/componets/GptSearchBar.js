import React from 'react'
import lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
  return (
    <div className='pt-[10%]'>
        <form className='bg-black w-1/2 mx-auto rounded-xl grid grid-cols-12'>
            <input className='p-3 m-6 rounded-lg col-span-9' type="text" placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className='p-3 m-6 bg-red-700 col-span-3 rounded-lg text-white'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;
