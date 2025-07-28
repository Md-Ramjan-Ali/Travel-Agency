import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { newsData } from '../../../data/data'
import NewsCard from './NewsCard'

export default function News() {
  return (
    <div className='py-20'>
      <div className="w-[80%] mx-auto">
        <SectionHeading heading='Exciting Travel News for You' subHeading="Discover the world's most loved travel spots, rich with culture, adventure, and unforgettable experiences." />
      </div>
      {/* News Image */}
      <div className="mt-16 w-[80%] mx-auto grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {newsData.map((data)=>{
        return <NewsCard key={data.id} news={data} />
      })}
      </div>
    </div>
  )
}
