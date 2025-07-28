import React from 'react'

type props ={
  heading: string;
  subHeading: string;
}
export default function SectionHeading({heading,subHeading}:props) {
  return (
    <div className='space-y-1'>
      <h1 className='text-lg sm:text-3xl font-bold'>{heading}</h1>
      <p className='font-medium w-[90%] md:w-[60%]'>{subHeading}</p>
    </div>
  )
}
