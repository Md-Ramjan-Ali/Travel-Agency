import React from 'react'
import SearchBox from '../../Helper/SearchBox'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh] '>
      {/* overly in the hero bg */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70 "></div>
      {/* video */}
      <video src="/video/hero1.mp4" autoPlay muted loop preload='metadata' className='w-full h-full object-cover'></video>
      {/* text */}
      <div className="absolute z-[100] w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center ">
        <div className="text-center space-y-4 text-white">
          <h1 className=' text-2xl md:text-4xl lg:text-5xl uppercase tracking-[0.7rem] font-bold'>Lets Enjoy The Nature</h1>
          <p className='md:text-base lg:text-lg [word-spacing:5px] px-2'>Get the best prices on 2,000,000+ properties, worldwide</p>
        </div>
        {/* search box */}
        <SearchBox></SearchBox>
        {/* search */}
        <Link href='#' className="rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-1 hover:ring-offset-1 hover:ring-red-400 transition-all ease-out duration-300">
          <span className="absolute right-8 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40"></span>
          <span className="relative font-bold"> Search</span>
        </Link>
      </div>
    </div>
  )
}
