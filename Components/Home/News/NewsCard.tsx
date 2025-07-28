import Image from 'next/image';
import React from 'react'

type props={
  news: {
    title: string;
    date: string;
    image: string;
  }
}
export default function NewsCard({news}:props) {

  return (
    <div className=''>
      {/* image */}
      <div className="relative h-[300px] group">
        {/* overlay */}
        <div className="absolute inset-0 bg-black opacity-25 block rounded-lg"></div>
        {/*  image*/}
        <Image src={news.image} alt={news.title} width={300} height={300} className='rounded-lg w-full h-full group-hover:scale-105 transition-all duration-300 cursor-pointer object-cover' />
      </div>
      {/* text-content */}
      <h2 className='text-lg mt-5 mb-3 font-bold'>{news.title}</h2>
      <p className='text-base font-medium'>{news.date}</p>
    </div>
  )
}
