import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import DestinationSlider from './DestinationSlider'

export default function Destination() {
  return (
    <div className='py-20'>
      {/* section heading */}
      <div className="w-[80%] mx-auto">
        <SectionHeading heading='Exploring Popular Destination' subHeading="Discover the world's most loved travel spots, rich with culture, adventure, and unforgettable experiences." />
      </div>
      {/* section content */}
      <div className="w-[80%] mx-auto mt-16">
        <DestinationSlider />
      </div>

    </div>
  )
}
