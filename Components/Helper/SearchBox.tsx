import React from 'react'
import { FaCalendar } from 'react-icons/fa'
import { FaMapLocation, FaUserGroup } from 'react-icons/fa6'

export default function SearchBox() {
  return (
    <div className='bg-white p-8 rounded-lg w-[90%] sm:w-[80%] mt-4 sm:mt-6 grid justify-center items-center gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
      {/* 1st search input */}
      <div className="flex items-center space-x-6">
        <FaMapLocation className='text-3xl text-blue-600' />
        <div className="">
          <h1 className='text-lg font-semibold mb-1'>Location</h1>
          <input type="text" placeholder='Where are you going?' className='outline-0 border-0 placeholder:text-gray-800 ' />
        </div>
      </div>
      {/* 2nd search input */}
      <div className="flex items-center space-x-6">
        <FaCalendar className='text-3xl text-blue-600' />
        <div className="">
          <h1 className='text-lg font-semibold mb-1'>Start Date</h1>
          <input type="date" className='outline-0 border-0 placeholder:text-gray-800 ' />
        </div>
      </div>
      {/* 3rd search input */}
      <div className="flex items-center space-x-6">
        <FaCalendar className='text-3xl text-blue-600' />
        <div className="">
          <h1 className='text-lg font-semibold mb-1'>End Date</h1>
          <input type="date" className='outline-0 border-0 placeholder:text-gray-800 ' />
        </div>
      </div>
      {/* 4th search input  */}
      <div className="flex items-center space-x-6">
        <FaUserGroup className='text-3xl text-blue-600' />
        <div className="">
          <h1 className='text-lg font-semibold mb-1'>Guest</h1>
          <p className='text-base font-normal'>1 Guest 1 Room</p>
        </div>
      </div>
    </div>
  )
}
