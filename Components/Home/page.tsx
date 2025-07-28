import React from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Destination />
      <Hotel />
    </div>
  )
}
