import Image from 'next/image';
import React from 'react'

type props={
  image: string;
  title: string
}

export default function WhyChooseCard({image,title}:props) {
  return (
    <div>
      {/* image */}
      <Image src={image} alt={image} width={70} height={70} className='mx-auto' />
      {/* content */}
      <h1 className='text-lg font-medium mt-6 text-center'>{title}</h1>
      <p className='mt-2 text-xs font-medium text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis!</p>
    </div>
  )
}
