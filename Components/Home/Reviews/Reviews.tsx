'use client'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'

export default function Reviews() {
  return (
    <div className='py-20 flex justify-center items-center bg-blue-800'>
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-8">
        {/* text-content */}
        <div className="text-white">
          <h1 className='text-xl lg:text-3xl font-bold mb-2'>What our customers are saying us?</h1>
          <p>Our travelers satisfaction is our top priority. Hear from happy customers who’ve experienced unforgettable journeys with us — from seamless bookings to exceptional service, their stories speak for our commitment to excellence.</p>
          <div className="mt-4 space-y-1">
            <p className='text-4xl font-bold'>4.88</p>
            <p>Overall Rating</p>
            <div className="flex">
              <FaStar className='text-white'></FaStar>
              <FaStar className='text-white'></FaStar>
              <FaStar className='text-white'></FaStar>
              <FaStar className='text-white'></FaStar>
              <FaStar className='text-white'></FaStar>
            </div>
          </div>
        </div>
        {/* review slider */}
        <div className="">
          <ReviewSlider />
        </div>
      </div>
    </div>
  )
}
