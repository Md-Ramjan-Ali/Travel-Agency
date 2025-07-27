import React from 'react'

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
          <p className='md:text-base lg:text-lg [word-spacing:10px] '>Get the best prices on 2,000,000+ properties, worldwide</p>
        </div>
      </div>
    </div>
  )
}
