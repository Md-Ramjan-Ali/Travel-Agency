import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { hotelsData } from '../../../data/data'
import HotelCard from './HotelCard'

export default function Hotel() {
  return (
    <div className='py-20'>
      {/* section heading */}
      <div className="w-[80%] mx-auto">
        <SectionHeading heading='Recommended Hotels' subHeading="Discover the world's most loved travel spots, rich with culture, adventure, and unforgettable experiences." />
      </div>
      {/* section content */}
      <div className="w-[80%] mx-auto mt-16 grid justify-center items-center gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {/* hotel cart */}
        {hotelsData.map((data) => {
          return <div key={data.id}>
            <HotelCard hotel={data}/>
          </div>
        })}
      </div>
    </div>
  )
}
