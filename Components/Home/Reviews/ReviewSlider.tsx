import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from "swiper/modules"
import { reviewData } from '../../../data/data'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'

export default function ReviewSlider() {
  return (
    <div>
      <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className='md:w-[450px] md:h-[350px] w-[90%] h-[300px] '>
        {reviewData.map((data) => {
          return (
            <SwiperSlide key={data.id} className='bg-white block rounded-2xl'>
              <div className="w-[80%] mx-auto mt-16">
                <p className='text-xs sm:text-sm md:text-base'>{data.review}</p>
                <div className="flex items-center mt-4">
                  <FaStar className='text-yellow-500'></FaStar>
                  <FaStar className='text-yellow-500'></FaStar>
                  <FaStar className='text-yellow-500'></FaStar>
                  <FaStar className='text-yellow-500'></FaStar>
                  <FaStar className='text-yellow-500'></FaStar>
                </div>
                {/* user profile */}
                <div className="flex items-center space-x-4 mt-10">
                  <Image src={data.image} alt='client' width={60} height={60} className='rounded-full' />
                  <div className="space-y-1">
                    <h2 className='text-2xl font-bold'>{data.name}</h2>
                    <p className='text-lg'>Web Developer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
