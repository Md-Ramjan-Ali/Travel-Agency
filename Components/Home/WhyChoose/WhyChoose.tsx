import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import WhyChooseCard from './WhyChooseCard'

export default function WhyChoose() {
  return (
    <div className='py-20'>
      {/* section heading */}
      <div className="w-[80%] mx-auto">
        <SectionHeading heading='Why Choose Us' subHeading="Discover the world's most loved travel spots, rich with culture, adventure, and unforgettable experiences." />
      </div>
      {/* choose card */}
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="">
          <WhyChooseCard image="/images/c1.svg" title="Best Price Guarantee" />
        </div>
        <div className="">
          <WhyChooseCard image="/images/c1.svg" title="Easy & Quick Booking" />
        </div>
        <div className="">
          <WhyChooseCard image="/images/c1.svg" title="Customer Care 24/7" />
        </div>

      </div>
    </div>
  )
}
